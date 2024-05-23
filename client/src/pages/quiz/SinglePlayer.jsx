// SinglePlayerPage.jsx
import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // importa Button de la react-bootstrap
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useDispatch } from 'react-redux'
import { AuthContext } from "../../context/AuthContext";
import "./style/App.css";
import "./style/Main.css";

const SinglePlayerPage = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch()


    const handleStartGame = () => {
        // logica pentru începerea jocului single-player
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    };
    const { user, logoutUser } = useContext(AuthContext);


    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
                <Col xs={12} md={6} className="text-center">
                    <div>
                        <h1 className="creepy-text">Welcome to Single Player Mode!</h1> {/* Textul creepy */}

                        <ol>
                           
                        </ol>

                        {user && (
                        <div style={{ display: "inline" }}>
                            <span className="text-light" style={{ color: "#0e1626" }}>{user?.name}</span>
                         </div>                    
                        )} 
                        <Link to="/start-game" className="mt-3 d-block">
                            <Button variant="primary" onClick={handleStartGame} className="mt-3">Start Game</Button> {/* Butonul pentru începerea jocului single-player */}
                        </Link>
                        <Link to="/" className="mt-3 d-block">
                            <Button variant="info">Back to Home</Button> {/* Butonul pentru a reveni la pagina principală */}
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SinglePlayerPage;
