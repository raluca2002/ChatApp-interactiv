import { useContext , useState} from "react";
import { Alert, Button, Form, Container, Row, Col , NavLink} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg"
import avatar5 from "../assets/avatar5.jpg"
import avatar6 from "../assets/avatar6.jpg"
import avatar7 from "../assets/avatar7.jpg"
import avatar8 from "../assets/avatar8.jpg"
import avatar9 from "../assets/avatar9.jpg"
import avatar10 from "../assets/avatar10.jpg"
import avatar11 from "../assets/avatar11.jpg"

const Register = () => {
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading, userType, setUserType } = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState(null);

    const avatarList = [avatar1, avatar2, avatar3, avatar4,avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11];

    const getRandomAvatarIndex = () => {
        return Math.floor(Math.random() * avatarList.length);
    }

    const randomAvatarIndex = getRandomAvatarIndex();
    const selectedAvatar = avatarList[randomAvatarIndex]; 

    
    return (
        <div className="register-background" >
            <Container className="register-container p-5 rounded shadow" style={{ backgroundColor: "#0e1626", width: "70%"}}>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={5}>
                        <div className="text-center mb-4">
                            <img src="/undraw_welcome_cats_thqn.svg" alt="Illustration" className="img-fluid" style={{ width: "100%" }}  />
                            <h2 className="mt-3 mb-4" style={{ color: "#ffffff" }}>Sign Up</h2>
                        </div>
                        <Form onSubmit={registerUser}>
                        {/* <Form.Group controlId="formBasicImage" className="mb-4">
                            <Form.Label style={{ color: "#ffffff" }}>Profile Picture</Form.Label>
                            <div className="me-2">
                            <NavLink to="/setavatar">
                                    <Button variant="primary">Select Avatar</Button>
                            </NavLink>                           
                            </div>
                        </Form.Group> */}

                            <Form.Group controlId="formBasicName" className="mb-3">
                                <Form.Label style={{ color: "#ffffff" }}>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label style={{ color: "#ffffff" }}>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="mb-4">
                                <Form.Label style={{ color: "#ffffff" }}>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
                                />
                            </Form.Group>
                            
                            <Button variant="info" type="submit" className="w-100 mb-3" disabled={isRegisterLoading}>
                                {isRegisterLoading ? "Creating your account" : "Register"}
                            </Button>
                                                        
                            {registerError?.error && (
                                <Alert variant="danger" className="mt-3">
                                    <p>{registerError?.message}</p>
                                </Alert>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
