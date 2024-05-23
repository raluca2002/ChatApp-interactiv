import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="homepage-background" >
            <Container fluid className="text-center mt-4" style={{ backgroundColor: "#0e1626",maxWidth:"130vh", maxHeight:"100vh"}}>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                        <div className="illustration-wrapper">
                            <img src="/undraw_graduation_re_gthn.svg" alt="Illustration" className="illustration-img" style={{ width: "70%" }}/>
                        
                        <h1 className="mb-4">Welcome to BrainyGate!</h1>
                        

                        </div>
                        <Row className="mt-5">
                            <Col >
                                { <h4>Are you ready for a new game?</h4> }
                                <Link to="/login">
                                    <Button variant="info">Login</Button>
                                </Link>
                            </Col>
                            <Col >
                                { <h4>Is this your first game?</h4> }
                                <Link to="/register">
                                    <Button variant="info">Register</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <h6>Are you a tech?</h6>
                                <Link to="/teacher-login">
                                    <Button variant="danger">Tech Login</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
