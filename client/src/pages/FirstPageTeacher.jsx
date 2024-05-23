import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstPageTeacher = () => {
    const handleAddQuestion = () => {
        // Redirect sau afișare modal pentru adăugarea întrebării
        console.log("Add question button clicked!");
    };

    return (
        <Container fluid>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} className="text-center">
                    <h2>Welcome, Teacher!</h2>
                    <p>Click the button below to add a new question:</p>
                    <Link to="/add-question">
                     <Button variant="primary" onClick={handleAddQuestion}>Add Question</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default FirstPageTeacher;
