import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const LearningMaterials = () => {
  const materials = [
    { title: "Baze ale programării", url: "/baze-programarii" }, 
    { title: "Structuri de date de bază", description: "", url: "/fizica" },
    { title: "Algoritmi clasici", description: "", url: "/matematica" },
    { title: "Algoritmi recursivi", description: "", url: "/matematica" },
  ];

  return (
    <Container className="mt-4">
      <div className="text-center">
        <h1 className="text-center  mb-4" style={{ fontSize: '2.5rem' }}>Materiale de Învățare</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <ul className="list-group list-group-flush">
            {materials.map((material, index) => (
              <li key={index} className="list-group-item">
                <Link to={material.url} className="text-decoration-none text-dark">
                  <h2 className="mb-0" style={{ fontSize: '1.5rem' }}>{material.title}</h2>
                  {material.description && <p className="mb-0 mt-2" style={{ fontSize: '1rem' }}>{material.description}</p>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default LearningMaterials;
