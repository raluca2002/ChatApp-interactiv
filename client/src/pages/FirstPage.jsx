import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/quiz/style/FirstPage.css";

const FirstPage = () => {
    return (
        <div className="pagina-joc-fundal">
            <Container className="pagina-joc-container">
                <Row className="justify-content-center align-items-center text-center">
                    <Col xs={12} md={8} lg={6}>
                        <div className="logo-wrapper">
                            <img src="/logoooo.png" alt="BrainyGate Logo" className="pagina-joc-logo" />
                        </div>
                        <h1 className="pagina-joc-titlu">Bine ai venit la BrainyGate!</h1>
                        <div className="pagina-joc-descriere">
                            <h5>Pregătește-te pentru admiterea la informatică cu BrainyGate!</h5>
                            <h5>Testează-ți cunoștințele și îmbunătățește-ți abilitățile pentru a excela la examen.</h5>
                            <h5>Repetarea este cheia succesului!</h5>
                        </div>
                        <Link to="/single-player">
                            <Button className="pagina-joc-buton">Play</Button>
                        </Link>
                        <div className="pagina-joc-info mt-4">
                            <p className="pagina-joc-cursuri">
                                Vizitează și secțiunea noastră de <Link to="/materials" className="pagina-joc-link-cursuri">cursuri</Link> pentru resurse suplimentare!
                            </p>
                        </div>
                        <div className="pagina-joc-info mt-4">
                            <p className="pagina-joc-reguli">
                                Asigură-te că ai citit <Link to="/rules" className="pagina-joc-link-reguli">regulile jocului</Link> înainte de a începe!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FirstPage;
