import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { AuthContext } from './context/AuthContext';
import { GameContextProvider } from './context/GameContext'; // Importă GameContextProvider
import { ChatContextProvider } from './context/ChatContext';
import TeacherLogin from './pages/TeacherLogin';
import AvatarSelectionPage from './pages/Avatar';
import FirstPage from './pages/FirstPage';
import SinglePlayerPage from './pages/quiz/SinglePlayer';
import StartGamePage from './pages/quiz/StartGame';
import FirstPageTeacher from './pages/FirstPageTeacher';
import AddQuestionPage from './pages/AddQuestion';
import Result from'./pages/quiz/Result'
import LearningMaterials from './components/learning/LearningMaterials';
import BazeProgramarii from './components/learning/materials/Baze';
import Clasament from './pages/Clasament'

function App() {
  const { user } = useContext(AuthContext);
  const isTeacher = user && user.email === 'info_romana@gmail.com';

  return (
    <ChatContextProvider user={user}>
      <NavBar />
      <Container>
        {/* Încadrează totul în GameContextProvider */}
        
          <Routes>
            <Route path="/" element={user ? <FirstPage /> : <HomePage />} />
            <Route path="/" element={isTeacher ? <FirstPageTeacher /> : <HomePage />} />
            <Route path="/homepage" element={user ? <Chat /> : <HomePage />} />
            <Route path="/register" element={user ? <FirstPage /> : <Register />} />
            <Route path="/setavatar" element={user ? <Chat /> : <AvatarSelectionPage />} />
            <Route path="/login" element={user ? <FirstPage /> : <Login />} />
            {/* <Route path="/rules" element ={user ? <Chat/> : <Rules/>} />  */}
            <Route path="/chat" element={user ? <Chat /> : <Chat />} />
            <Route path="/teacher-login" element={user ? <FirstPageTeacher /> : <TeacherLogin />} />
            <Route path="/first-page" element={user ? <FirstPage /> : <FirstPage />} />
            <Route path="/first-page-teacher" element={isTeacher ? <FirstPageTeacher /> : <FirstPageTeacher />} />
            <Route path="/single-player" element={user ? <SinglePlayerPage /> : <SinglePlayerPage />} />
            <Route path="/start-game" element={user ? <StartGamePage /> : <HomePage />} />
            <Route path="/add-question" element={isTeacher ? <AddQuestionPage /> : <AddQuestionPage />} />
            <Route path="/result" element={user ? <Result /> : <HomePage />} />
            <Route path="/materials" element={user ? <LearningMaterials/>: <HomePage />} />
            <Route path="/baze-programarii" element={user ? <BazeProgramarii/>: <HomePage />} />
            <Route path="/clasament" element={user ? <Clasament/>: <HomePage />} />

            <Route path="" element={<Navigate to="/" />} />
          </Routes>
        
      </Container>
    </ChatContextProvider>
  );
}

export default App;
