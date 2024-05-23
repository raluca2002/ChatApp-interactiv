import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/quiz/style/FirstPage.css";

const FirstPage = () => {
    return (
        <div className="pagina-joc-fundal">
            <Container className="pagina-joc-container">
                <Row className="justify-content-center align-items-center text-center">
                    <Col xs={12} md={8}>
                        <div className="logo-wrapper">
                            <img src="/logoooo.png" alt="BrainyGate Logo" className="pagina-joc-logo" />
                        </div>
                        <h1 className="pagina-joc-titlu">Bine ai venit la BrainyGate!</h1>
                        <p className="pagina-joc-descriere">
                            Pregătește-te pentru admiterea la Facultatea de Informatică a Universității Babeș-Bolyai cu BrainyGate!
                            Acest joc educațional îți oferă oportunitatea perfectă de a-ți testa și îmbunătăți cunoștințele.
                            Fiecare întrebare te va ajuta să repeți materia și să îți perfecționezi abilitățile necesare pentru a excela la examen.
                            Nu uita, repetarea este cheia succesului! De asemenea, explorează secțiunea noastră de cursuri pentru resurse suplimentare care te vor ajuta să înveți mai eficient și să fii cu un pas înaintea celorlalți.
                        </p>
                        <Link to="/single-player">
                            <Button  className="pagina-joc-buton">Play</Button>
                        </Link>
                        <div className="pagina-joc-info mt-4">
                            
                            <p className="pagina-joc-cursuri">
                                Nu uita să vizitezi și secțiunea noastră de <Link to="/materials" className="pagina-joc-link-cursuri">cursuri</Link> pentru resurse suplimentare și materiale de învățare!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FirstPage;
