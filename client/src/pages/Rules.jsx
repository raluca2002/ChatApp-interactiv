import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './quiz/style/Rules.css';

const Rules = () => {
    return (
        <Container className="rules-container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <h1 className="rules-title">Regulile Jocului</h1>
                    <p className="rules-intro">
                        Bine ați venit la BrainyGate! Vă rugăm să citiți cu atenție regulile de mai jos înainte de a începe.
                    </p>

                    <h2 className="rules-subtitle">Obiectivul Jocului</h2>
                    <p className="rules-text">
                        Scopul jocului este de a răspunde corect la cât mai multe întrebări posibil în timpul alocat. Participanții cu cele mai multe răspunsuri corecte vor fi clasificați în funcție de punctaj.
                    </p>

                    <h2 className="rules-subtitle">Regulile Generale</h2>
                    <ul className="rules-list">
                        <li>Fiecare participant trebuie să aibă un cont valid pentru a putea juca.</li>
                        <li>Jocul constă în 15 întrebări alese aleatoriu dintr-o bază de date extinsă.</li>
                        <li>Fiecare întrebare are patru opțiuni de răspuns, din care doar una este corectă.</li>
                    </ul>

                    <h2 className="rules-subtitle">Timpul de Răspuns</h2>
                    <ul className="rules-list">
                        <li>Fiecare întrebare are un timp limitat pentru a răspunde.</li>
                        <li>Dacă nu răspundeți la timp, întrebarea va fi marcată ca fiind greșită și veți trece la următoarea întrebare.</li>
                    </ul>

                    <h2 className="rules-subtitle">Punctaj și Clasament</h2>
                    <ul className="rules-list">
                        <li>Fiecare răspuns corect valorează un punct.</li>
                        <li>Clasamentul este determinat în funcție de numărul total de puncte acumulate.</li>
                        <li>În caz de egalitate, timpul total de răspuns va fi folosit pentru a determina clasamentul final.</li>
                    </ul>

                    <h2 className="rules-subtitle">Comportament Acceptabil</h2>
                    <ul className="rules-list">
                        <li>Este interzisă utilizarea oricăror mijloace externe pentru a obține răspunsuri (de exemplu, Google, ajutorul unei alte persoane).</li>
                        <li>Participanții trebuie să joace cinstit și să respecte regulile jocului.</li>
                        <li>Orice comportament nepotrivit sau tentativă de fraudă va duce la descalificare.</li>
                    </ul>

                    <h2 className="rules-subtitle">Întrebări și Suport</h2>
                    <p className="rules-text">
                        Dacă aveți întrebări sau aveți nevoie de ajutor, vă rugăm să contactați echipa de suport.
                    </p>

                    <h2 className="rules-subtitle">Modificări ale Regulilor</h2>
                    <p className="rules-text">
                        Organizatorii își rezervă dreptul de a modifica regulile jocului în orice moment. Orice modificare va fi anunțată participanților în prealabil.
                    </p>

                    <h2 className="rules-subtitle">Acceptarea Regulilor</h2>
                    <p className="rules-text">
                        Prin participarea la joc, acceptați și sunteți de acord să respectați toate regulile menționate mai sus.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Rules;
