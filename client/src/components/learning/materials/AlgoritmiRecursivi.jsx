import React from 'react';
import './style.css'; // importă stilurile personalizate
import { Card, Container, Button } from 'react-bootstrap';

const AlgoritmiRecursivi = () => {

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Algoritmi Recursivi</h1>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Ce este recursivitatea?</Card.Title>
          <Card.Text>
            Recursivitatea este o tehnică de programare în care o funcție își apelează propria definiție. Aceasta permite rezolvarea problemelor prin descompunerea lor în subprobleme mai mici, similare cu problema inițială. O funcție recursivă trebuie să aibă:
          </Card.Text>
          <ul>
            <li>Un caz de bază care oprește recursivitatea.</li>
            <li>Un caz recursiv care reduce problema către cazul de bază.</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Algoritmii Recursivi */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Exemple de Algoritmi Recursivi</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Factorial</Card.Title>
              <Card.Text>
                Factorialul unui număr n este produsul tuturor numerelor întregi pozitive mai mici sau egale cu n. Este definit recursiv ca:
              </Card.Text>
              <Card.Text>
                n! = n * (n-1)!, cu 0! = 1
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
{`def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # Output: 120`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Fibonacci</Card.Title>
              <Card.Text>
                Secvența Fibonacci este o serie de numere în care fiecare număr este suma celor două numere precedente. Este definit recursiv ca:
              </Card.Text>
              <Card.Text>
                F(n) = F(n-1) + F(n-2), cu F(0) = 0 și F(1) = 1
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
{`def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(6))  # Output: 8`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Binary Search (Recursiv)</Card.Title>
              <Card.Text>
                Binary Search poate fi implementat și recursiv. Algoritmul caută într-o listă sortată, divizând lista în jumătate și căutând în sublista corespunzătoare.
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
{`def binary_search(arr, low, high, x):
    if high >= low:
        mid = (low + high) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, high, x)
    else:
        return -1

arr = [2, 3, 4, 10, 40]
x = 10
result = binary_search(arr, 0, len(arr)-1, x)
if result != -1:
    print("Elementul este prezent în indexul", result)
else:
    print("Elementul nu este prezent în lista")`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Turnurile din Hanoi</Card.Title>
              <Card.Text>
                Problema Turnurilor din Hanoi implică mutarea unui set de discuri de pe o tijă pe alta, folosind o tijă auxiliară, respectând anumite reguli. 
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
{`def hanoi(n, source, target, auxiliary):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    hanoi(n - 1, source, auxiliary, target)
    print(f"Move disk {n} from {source} to {target}")
    hanoi(n - 1, auxiliary, target, source)

hanoi(3, 'A', 'C', 'B')`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Combinări (Combinations)</Card.Title>
              <Card.Text>
                Generarea combinărilor dintr-o mulțime de elemente poate fi realizată recursiv prin includerea sau excluderea fiecărui element.
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
{`def combinations(arr, n):
    if n == 0:
        return [[]]
    if not arr:
        return []
    first, rest = arr[0], arr[1:]
    combs_with_first = [[first] + comb for comb in combinations(rest, n-1)]
    combs_without_first = combinations(rest, n)
    return combs_with_first + combs_without_first

print(combinations([1, 2, 3, 4], 2))  # Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Problema n-regine</Card.Title>
              <Card.Text>
                Problema n-regine presupune plasarea a n regine pe o tablă de șah de n x n astfel încât nici două regine să nu se atace reciproc.
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
{`def is_safe(board, row, col):
    for i in range(col):
        if board[row][i] == 1:
            return False
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False
    for i, j in zip(range(row, len(board), 1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False
    return True

def solve_n_queens(board, col):
    if col >= len(board):
        return True
    for i in range(len(board)):
        if is_safe(board, i, col):
            board[i][col] = 1
            if solve_n_queens(board, col + 1):
                return True
            board[i][col] = 0
    return False

def print_board(board):
    for row in board:
        print(" ".join(str(cell) for cell in row))

n = 4
board = [[0 for _ in range(n)] for _ in range(n)]
if solve_n_queens(board, 0):
    print_board(board)
else:
    print("Nu există soluție")`}
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

export default AlgoritmiRecursivi;
