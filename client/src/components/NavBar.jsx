import { Container, Nav, Navbar, Stack, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";
import avatar1 from "../assets/avatar1.jpg"; // Adaugă avataruri
import avatar2 from "../assets/avatar2.jpg";

const avatarList = [
  avatar1,
  avatar2,
  // ... restul avatarurilor
];

const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatarList.length);
  return avatarList[randomIndex];
};

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const avatar = getRandomAvatar(); // Obține un avatar random

  return (
    <Navbar bg="blue" variant="blue" expand="lg" className="mb-5" style={{ backgroundColor: "#0e1626", height: "3.25rem" }}>
      <Container fluid>
        <Stack direction="horizontal" gap={3} style={{ width: "100%" }}>
          {user && (
            <Dropdown>
              <Dropdown.Toggle variant="outline-light">
                <img src={avatar} height="30px" alt="User Avatar" className="rounded-circle" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item> */}
                <Dropdown.Item as={Link} to="/chat">Chat</Dropdown.Item>
                <Dropdown.Item as={Link} to="/rules">Reguli</Dropdown.Item>
                <Dropdown.Item as={Link} to="/materials">Materiale</Dropdown.Item>
                <Dropdown.Item as={Link} to="/clasament">Clasament</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {user && (
            <div style={{ display: "inline" }}>
              <span className="text-light" style={{ color: "#0e1626" }}>{user?.name}</span>
            </div>
          )}
          {user && (
            <Navbar.Brand as={Link} to="/" className="text-light text-center" style={{ color: "#ff0068", fontSize: "24px", width: "100%" }}>
              BrainyGate
            </Navbar.Brand>
          )}
        </Stack>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Stack direction="horizontal" gap={3}>
              {user && (
                <Nav.Link as={Link} to="/chat" className="text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-chat-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                  </svg>
                </Nav.Link>
              )}
              {user ? (
                <>
                  <Notification />
                  <Nav.Link as={Link} to="/" onClick={() => logoutUser()} className="text-light" style={{ color: "#0e1626" }}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  {/* <Nav.Link as={Link} to="/login" className="text-light" style={{ color: "#0e1626" }}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="text-light" style={{ color: "#0e1626" }}>
                    Register
                  </Nav.Link> */}
                </>
              )}
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
