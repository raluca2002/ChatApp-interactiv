import React, { createContext, useState, useContext,useCallback , useEffect } from 'react';
import { baseUrl, getRequest, postRequest} from "../utils/services";


export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    // const [questions, setQuestions] = useState(null);
    // const [questionError, setQuestionError] = useState(null);
    // const [isQuestionLoading, setIsQuestionLoading] = useState(false);
    // const [questionInfo, setQuestionInfo] = useState({
    //     text: "",
    //     options: [],
    //     correctAnswer: "",
    // });
    // //console.log("questionInfo", questionInfo);
    // const updateQuestionInfo = useCallback((info) => {
    //     setQuestionInfo(info);
    // },[])
   
    // // // Alte state-uri și funcționalități legate de joc pot fi adăugate aici

    

    // const addQuestion = useCallback( async(e) => {
    //     e.preventDefault();
    //     setIsQuestionLoading(true);
    //     setQuestionError(null);
        
    //     const baseUrl = "http://localhost:5000/api"
    //     const response = await postRequest(`${baseUrl}/questions/`, JSON.stringify(questionInfo));


    //     setIsQuestionLoading(false);

    //     if(response.error){
    //         return setQuestionError(response);
    //     }

    //     //localStorage.setItem("Question", JSON.stringify(response))

    //     setQuestions(response);
    // }, [questionInfo]);

    // return (
    //     <GameContext.Provider 
    //     value={{ 
    //         questions, 
    //         addQuestion,
    //         questionError,
    //         questionInfo,
    //         updateQuestionInfo,
    //         isQuestionLoading, 
    //     }}>
    //         {children}
    //     </GameContext.Provider>
    // );
};

export const useGame = () => {
    // const context = useContext(GameContext);
    // if (!context) {
    //     throw new Error('useGame must be used within a GameContextProvider');
    // }
    // return context;
};
