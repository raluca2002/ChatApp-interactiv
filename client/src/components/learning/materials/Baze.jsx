import React from 'react';
import './style.css'; // importă stilurile personalizate
import { Card, Container, Button } from 'react-bootstrap';

const BazeProgramarii = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Baze ale programării</h1>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Variabile, tipuri de date, operatori aritmetici și logici</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Variabile</Card.Title>
              <Card.Text>
                <strong>Definiție:</strong> O variabilă este o zonă de memorie care stochează date ce pot fi modificate în timpul execuției programului.
              </Card.Text>
              <Card.Text>
                <strong>Declarație și inițializare:</strong> În majoritatea limbajelor de programare, o variabilă trebuie declarată și poate fi inițializată.
              </Card.Text>
              <pre className="code-block">
                <code>
{`int numar; // Declarație
numar = 10; // Inițializare
// sau
int numar = 10; // Declarație și inițializare simultan`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Tipuri de date</Card.Title>
              <Card.Text><strong>Tipuri primare:</strong></Card.Text>
              <ul>
                <li><strong>Intregi (int):</strong> Stochează valori întregi. Exemple: <code>int</code>, <code>short</code>, <code>long</code>.</li>
                <li><strong>Punct flotant (float, double):</strong> Stochează valori cu virgulă mobilă. Exemple: <code>float</code>, <code>double</code>.</li>
                <li><strong>Caracter (char):</strong> Stochează un singur caracter. Exemple: <code>char</code>.</li>
                <li><strong>Boolean (bool):</strong> Stochează valori de adevăr (<code>true</code> sau <code>false</code>).</li>
              </ul>

              <Card.Text><strong>Tipuri complexe:</strong></Card.Text>
              <ul>
                <li><strong>Stringuri:</strong> Stochează șiruri de caractere. Exemple: <code>string</code> în C++, <code>String</code> în Java.</li>
                <li><strong>Tablouri (arrays):</strong> Colecții de elemente de același tip.</li>
                <li><strong>Structuri (structs)</strong> și <strong>Clase (classes):</strong> Agregate de variabile și funcții.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Operatori aritmetici</Card.Title>
              <ul>
                <li><strong>Adunare (+):</strong> <code>a + b</code></li>
                <li><strong>Scădere (-):</strong> <code>a - b</code></li>
                <li><strong>Înmulțire (*):</strong> <code>a * b</code></li>
                <li><strong>Împărțire (/):</strong> <code>a / b</code></li>
                <li><strong>Modulus (%):</strong> <code>a % b</code> (restul împărțirii întregi)</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Operatori logici</Card.Title>
              <ul>
                <li><strong>Și logic (AND, &&):</strong> <code>a && b</code></li>
                <li><strong>Sau logic (OR, ||):</strong> <code>a || b</code></li>
                <li><strong>Negare logică (NOT, !):</strong> <code>!a</code></li>
              </ul>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Controlul fluxului: structuri de decizie și bucle</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Structuri de decizie</Card.Title>
              <Card.Text><strong>If:</strong> Execută un bloc de cod dacă condiția specificată este adevărată.</Card.Text>
              <pre className="code-block">
                <code>
{`if (conditie) {
    // cod executat dacă conditia este adevărată
}`}
                </code>
              </pre>

              <Card.Text><strong>Else:</strong> Execută un bloc de cod dacă condiția specificată în <code>if</code> este falsă.</Card.Text>
              <pre className="code-block">
                <code>
{`if (conditie) {
    // cod executat dacă conditia este adevărată
} else {
    // cod executat dacă conditia este falsă
}`}
                </code>
              </pre>

              <Card.Text><strong>Else if:</strong> Verifică multiple condiții în ordinea specificată.</Card.Text>
              <pre className="code-block">
                <code>
{`if (conditie1) {
    // cod executat dacă conditia1 este adevărată
} else if (conditie2) {
    // cod executat dacă conditia2 este adevărată
} else {
    // cod executat dacă nici una din condiții nu este adevărată
}`}
                </code>
              </pre>

              <Card.Text><strong>Switch:</strong> Permite selecția uneia dintre mai multe ramuri de execuție pe baza valorii unei expresii.</Card.Text>
              <pre className="code-block">
                <code>
{`switch (expresie) {
    case valoare1:
        // cod pentru valoare1
        break;
    case valoare2:
        // cod pentru valoare2
        break;
    default:
        // cod dacă nici o valoare nu se potrivește
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Bucle</Card.Title>
              <Card.Text><strong>For:</strong> Execută un bloc de cod de un număr specificat de ori.</Card.Text>
              <pre className="code-block">
                <code>
{`for (int i = 0; i < 10; i++) {
    // cod executat de 10 ori
}`}
                </code>
              </pre>

              <Card.Text><strong>While:</strong> Execută un bloc de cod atâta timp cât condiția specificată este adevărată.</Card.Text>
              <pre className="code-block">
                <code>
{`while (conditie) {
    // cod executat cât timp conditia este adevărată
}`}
                </code>
              </pre>

              <Card.Text><strong>Do-While:</strong> Execută un bloc de cod cel puțin o dată și apoi repetă execuția cât timp condiția specificată este adevărată.</Card.Text>
              <pre className="code-block">
                <code>
{`do {
    // cod executat cel puțin o dată
} while (conditie);`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Funcții și proceduri</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Funcții</Card.Title>
              <Card.Text>
                <strong>Definiție:</strong> O funcție este un bloc de cod care poate fi apelat pentru a executa o anumită sarcină și poate returna o valoare.
              </Card.Text>
              <Card.Text>
                <strong>Declarație și definiție:</strong>
              </Card.Text>
              <pre className="code-block">
                <code>
{`// Declarație
int adunare(int a, int b);

// Definiție
int adunare(int a, int b) {
    return a + b;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Proceduri</Card.Title>
              <Card.Text>
                <strong>Definiție:</strong> O procedură este un bloc de cod care poate fi apelat pentru a executa o anumită sarcină, dar nu returnează o valoare.
              </Card.Text>
              <Card.Text>
                <strong>Declarație și definiție:</strong>
              </Card.Text>
              <pre className="code-block">
                <code>
{`// Declarație
void afisareMesaj();

// Definiție
void afisareMesaj() {
    cout << "Salut, lume!" << endl;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
      
      <div className="text-center">
        <Button className="pagina-joc-buton" href="/materials">Înapoi la Materiale de Învățare</Button>
      </div>
    </Container>
  );
};

export default BazeProgramarii;
