import React from 'react';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';
import './style.css';  // Importați fișierul CSS pentru stiluri

const AnalizaAlgoritmi = () => {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title className="mb-4">Analiza și complexitatea algoritmilor</Card.Title>
          <Card.Text>
            Analiza algoritmilor este o parte esențială a informaticii care se concentrează pe determinarea eficienței algoritmilor. Aceasta implică evaluarea timpului de execuție și a spațiului de memorie necesar pentru a rula un algoritm. În această pagină, vom explora concepte fundamentale legate de analiza și complexitatea algoritmilor.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Complexitatea în timp</Card.Title>
              <Card.Text>
                Complexitatea în timp se referă la cât timp durează un algoritm să ruleze în funcție de dimensiunea intrării. Este de obicei exprimată folosind notația Big O, care descrie comportamentul asimptotic al funcției de timp.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>O(1):</strong> Constante - Timpul de execuție este constant, indiferent de dimensiunea intrării.</ListGroup.Item>
                <ListGroup.Item><strong>O(n):</strong> Liniar - Timpul de execuție crește liniar cu dimensiunea intrării.</ListGroup.Item>
                <ListGroup.Item><strong>O(n^2):</strong> Pătratic - Timpul de execuție crește proporțional cu pătratul dimensiunii intrării.</ListGroup.Item>
                <ListGroup.Item><strong>O(log n):</strong> Logaritmic - Timpul de execuție crește logaritmic cu dimensiunea intrării.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Complexitatea în spațiu</Card.Title>
              <Card.Text>
                Complexitatea în spațiu se referă la cantitatea de memorie necesară pentru a rula un algoritm. Este important să se optimizeze atât timpul, cât și spațiul pentru a crea algoritmi eficienți.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>O(1):</strong> Spațiu constant - Utilizează o cantitate fixă de memorie.</ListGroup.Item>
                <ListGroup.Item><strong>O(n):</strong> Spațiu liniar - Memoria utilizată crește liniar cu dimensiunea intrării.</ListGroup.Item>
                <ListGroup.Item><strong>O(n^2):</strong> Spațiu pătratic - Memoria utilizată crește proporțional cu pătratul dimensiunii intrării.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Exemplu de Algoritm: Bubble Sort</Card.Title>
          <Card.Text>
            Bubble Sort este un algoritm simplu de sortare care compară elementele adiacente și le interschimbă dacă sunt în ordine greșită. Este un exemplu clasic de algoritm cu complexitate O(n^2).
          </Card.Text>
          <pre className="code-block">
            {`
#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(arr);
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
            `}
          </pre>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Notițe Importante</Card.Title>
          <Card.Text>
            - **Complexitatea asimptotică**: Determinarea modului în care timpul sau spațiul crește odată cu creșterea dimensiunii intrării.<br/>
            - **Cazuri specifice**: Worst-case, best-case, average-case analiză.<br/>
            - **Timpul de execuție și memoria** sunt două resurse esențiale care trebuie optimizate pentru a crea algoritmi eficienți.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AnalizaAlgoritmi;
