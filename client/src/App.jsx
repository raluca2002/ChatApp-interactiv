import{Routes, Route, Navigate} from "react-router-dom"
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar"
import { AuthContext } from "./context/AuthContext";
import React, { useContext } from "react";
import { ChatContextProvider } from "./context/ChatContext";
import TeacherLogin from "./pages/TeacherLogin";
import AvatarSelectionPage from "./pages/Avatar";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
      <NavBar />
        <Container >
          <Routes>
            <Route path="/" element ={user ? <Chat/> : <HomePage/>} />  
            <Route path="/homepage" element = {user ? <Chat/> : <HomePage/>}/>
            <Route path="/register" element ={user ? <Chat/> : <Register/>}/> 
            <Route path="/setavatar" element ={user ? <Chat/> : <AvatarSelectionPage/>}/>  
            <Route path="/login" element ={user ? <Chat/> : <Login/>} /> 
            <Route path="/teacher-login" element ={user ? <Chat/> : <TeacherLogin/>} />
            <Route path="" element ={<Navigate to="/"/>}/>  

          </Routes>
        </Container>
      </ChatContextProvider>
  );
}

export default App
