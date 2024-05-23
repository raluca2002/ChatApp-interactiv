

import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { ChatContext } from "../../context/ChatContext";
import ActiveSeriesModal from "./ActiveSeriesModal"; // Componenta pentru fereastra cu serii active

const BottomBar = () => {
  const { onlineUsers } = useContext(ChatContext);
  const [showModal, setShowModal] = useState(false);

  const handleUserClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="bottom-bar">
      <Row>
        <Col>
          <div className="d-flex align-items-center">
            <span className="me-2">Active users:</span>
            {onlineUsers.map((user) => (
              <Button key={user.userId} variant="link" onClick={handleUserClick}>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  roundedCircle
                  height="30"
                  className="me-2"
                />
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      {/* Fereastra cu serii active */}
      <ActiveSeriesModal show={showModal} handleClose={handleCloseModal} />
    </Container>
  );
};

export default BottomBar;
