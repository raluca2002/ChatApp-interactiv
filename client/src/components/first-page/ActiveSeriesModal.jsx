import React from "react";
import { Modal, Button } from "react-bootstrap";

const ActiveSeriesModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Active </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aici afișezi serii active */}
        <p>Serie 1</p>
        <p>Serie 2</p>
        <p>Serie 3</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActiveSeriesModal;
