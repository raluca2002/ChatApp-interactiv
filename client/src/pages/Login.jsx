import { Alert, Button, Form, Container, Row, Col, NavLink } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

const Login = () => {
    const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } = useContext(AuthContext);

    return (
        <div className="login-background" >
            <Container className="login-container p-5" style={{ backgroundColor: "#0e1626", width:"70%"}}>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={5}>
                        <div className="text-center mb-4">
                            <img src="/undraw_playful_cat_re_ac9g.svg" alt="Illustration" className="img-fluid" style={{ width: "100%" }} />
                            <h2 className="mt-3 mb-4" style={{ color: "#ffffff" }}>Sign In</h2>
                        </div>
                        <Form onSubmit={loginUser}>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label style={{ color: "#ffffff" }}>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => updateLoginInfo({ ...loginInfo, email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="mb-4">
                                <Form.Label style={{ color: "#ffffff" }}>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => updateLoginInfo({ ...loginInfo, password: e.target.value })}
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Button variant="info" type="submit" disabled={isLoginLoading}>
                                    {isLoginLoading ? "Logging in..." : "Log In"}
                                </Button>
                                {/* <NavLink href="/forgot-password" style={{ color: "#ffffff" }}>Forgot Password?</NavLink> */}
                            </div>
                            {loginError?.error && (
                                <Alert variant="danger" className="mt-3">
                                    <p>{loginError?.message}</p>
                                </Alert>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
