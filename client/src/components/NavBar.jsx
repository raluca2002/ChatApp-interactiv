import { Container, Nav, Navbar, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <Navbar bg="blue" variant="blue" expand="lg" className="mb-5" style={{ backgroundColor: "#0e1626", height:"3.25rem" }}>
            <Container fluid>
                <Stack direction="horizontal" gap={3} style={{ width: "100%" }}>
                    {user && (
                        <Button variant="outline-light" as={Link} to="/settings">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                            </svg>
                        </Button>
                    )}
                    <Navbar.Brand as={Link} to="/" className="text-light me-4" style={{ color: "#0e1626", fontSize: "24px"}}>
                        ChatApp
                    </Navbar.Brand>
                </Stack>
                {user && (
                    <span className="text-warning" style={{ color: "#0e1626" }}>Logged in as {user?.name}</span>
                )}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            {user ? (
                                <>
                                    <Notification />
                                    <Nav.Link as={Link} to="/" onClick={() => logoutUser()} className="text-light" style={{ color: "#0e1626" }}>
                                        Logout
                                    </Nav.Link>
                                </>
                            ) : (
                                 <>
                                {/* //     <Nav.Link as={Link} to="/login" className="text-light" style={{ color: "#0e1626" }}>
                                //         Login
                                //     </Nav.Link>
                                //     <Nav.Link as={Link} to="/register" className="text-light" style={{ color: "#0e1626" }}>
                                //         Register
                                //     </Nav.Link> */}
                                 </>
                            )
                        }
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
