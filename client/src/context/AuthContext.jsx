import { createContext, useState } from "react";
import React, { useCallback , useEffect} from 'react';
import { baseUrl, postRequest } from "../utils/services";
import { useContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{

const [user,setUser] = useState(null);
const [teacher, setTeacher] = useState(null);
const [userType, setUserType] = useState("");
const [secretKey, setSecretKey] = useState("");
const [registerError, setRegisterError] = useState(null);
const [isRegisterLoading, setIsRegisterLoading] = useState(false);
const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
});
const [loginError, setLoginError] = useState(null);
const [isLoginLoading, setIsLoginLoading] = useState(false);
const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
});
const [avatars, setAvatars] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    console.log("User", user);
    console.log("loginInfo", loginInfo); //refresh

   

    useEffect(() => {
        const user = localStorage.getItem("Login");

        setUser(JSON.parse(user));
    }, []);
    

    const updateRegisterInfo = useCallback((info) =>{
        setRegisterInfo(info);
    },[])

    const updateLoginInfo = useCallback((info) =>{
        setLoginInfo(info);
    },[])

    const registerUser = useCallback( 
        async(e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);
        
        const baseUrl = "http://localhost:5000/api"
        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));


        setIsRegisterLoading(false);

        if(response.error){
            return setRegisterError(response);
        }

        localStorage.setItem("User", JSON.stringify(response))

        setUser(response);
    }, [registerInfo]);


    const loginUser = useCallback(async(e) => {
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);

        const baseUrl = "http://localhost:5000/api"
        const response = await postRequest(
            `${baseUrl}/users/login`, 
            JSON.stringify(loginInfo)
            );

        setIsLoginLoading(false);

        if(response.error){
            return setLoginError(response)
        }

        localStorage.setItem("Login", JSON.stringify(response));

        
        setUser(response);

    }, [loginInfo]);


    const loginTeacher = useCallback(async(e) => {
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);

        const baseUrl = "http://localhost:5000/api"
        const response = await postRequest(
            `${baseUrl}/teachers/login`, 
            JSON.stringify(loginInfo)
            );

        setIsLoginLoading(false);

        if(response.error){
            return setLoginError(response)
        }

        localStorage.setItem("Login", JSON.stringify(response));

        
        setUser(response);

    }, [loginInfo]);

    const logoutUser = useCallback(() => {
        localStorage.removeItem("Login");
        setUser(null);
    }, []);


    const setProfilePicture = useCallback(async () => {
        
          const user = localStorage.getItem("Login")
          setUser(JSON.parse(user));


          const baseUrl = "http://localhost:5000/api"
          const { data } = await axios.post(`${baseUrl}/users/setavatar/${user._id}`, {
            image: avatars[selectedAvatar],
          });
    
          if (data.isSet) {
            user.isAvatarImageSet = true;
            user.avatarImage = data.image;
            localStorage.setItem(
              process.env.REACT_APP_LOCALHOST_KEY,
              JSON.stringify(user)
            );
            navigate("/");
          
        }
      }, []);
    
    



    return (
    <AuthContext.Provider 
        value={{
            user,
            teacher,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            isRegisterLoading,
            logoutUser,
            loginUser,
            loginError,
            loginInfo,
            updateLoginInfo,
            isLoginLoading,
            userType,
            setUserType,
            secretKey,
            setSecretKey,
            loginTeacher,
            setProfilePicture,
            selectedAvatar,
            setSelectedAvatar,
            avatars,
            setAvatars,
        }}
    >
        {children}
    </AuthContext.Provider>
    );
}
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;};