import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const LearningMaterials = () => {
  const materials = [
    { title: "Baze ale programării", url: "/baze-programarii" },
    { title: "Structuri de date de bază", url: "/structuri-date" },
    { title: "Algoritmi clasici", url: "/algoritmi" },
    { title: "Algoritmi recursivi", url: "/algoritmi-recursivi" },
  ];

  return (
    <Container className="mt-4">
      <div className="text-center">
        <h1 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Materiale de Învățare</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card-columns">
            {materials.map((material, index) => (
              <Card key={index} className="mb-4 shadow-sm">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{material.title}</Card.Title>
                  {material.description && (
                    <Card.Text style={{ fontSize: '1rem' }}>{material.description}</Card.Text>
                  )}
                  <Link to={material.url}>
                    <Button variant="info" className="mt-3">Explorează</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LearningMaterials;
