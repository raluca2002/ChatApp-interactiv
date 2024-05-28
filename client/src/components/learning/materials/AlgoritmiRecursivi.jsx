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
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    cout << factorial(5) << endl;  // Output: 120
    return 0;
}`}
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
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << fibonacci(6) << endl;  // Output: 8
    return 0;
}`}
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
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int low, int high, int x) {
    if (high >= low) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, low, mid - 1, x);
        return binarySearch(arr, mid + 1, high, x);
    }
    return -1;
}

int main() {
    vector<int> arr = {2, 3, 4, 10, 40};
    int x = 10;
    int result = binarySearch(arr, 0, arr.size() - 1, x);
    if (result != -1)
        cout << "Elementul este prezent în indexul " << result << endl;
    else
        cout << "Elementul nu este prezent în lista" << endl;
    return 0;
}`}
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
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
using namespace std;

void hanoi(int n, char source, char target, char auxiliary) {
    if (n == 1) {
        cout << "Move disk 1 from " << source << " to " << target << endl;
        return;
    }
    hanoi(n - 1, source, auxiliary, target);
    cout << "Move disk " << n << " from " << source << " to " << target << endl;
    hanoi(n - 1, auxiliary, target, source);
}

int main() {
    hanoi(3, 'A', 'C', 'B');
    return 0;
}`}
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
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
using namespace std;

void combinations(vector<int>& arr, int n, vector<int>& comb, int start) {
    if (n == 0) {
        for (int i : comb)
            cout << i << " ";
        cout << endl;
        return;
    }
    for (int i = start; i <= arr.size() - n; i++) {
        comb.push_back(arr[i]);
        combinations(arr, n - 1, comb, i + 1);
        comb.pop_back();
    }
}

int main() {
    vector<int> arr = {1, 2, 3, 4};
    vector<int> comb;
    combinations(arr, 2, comb, 0);
    return 0;
}`}
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
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
using namespace std;

bool isSafe(vector<vector<int>>& board, int row, int col) {
    for (int i = 0; i < col; i++)
        if (board[row][i])
            return false;
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false;
    for (int i = row, j = col; j >= 0 && i < board.size(); i++, j--)
        if (board[i][j])
            return false;
    return true;
}

bool solveNQueens(vector<vector<int>>& board, int col) {
    if (col >= board.size())
        return true;
    for (int i = 0; i < board.size(); i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQueens(board, col + 1))
                return true;
            board[i][col] = 0;
        }
    }
    return false;
}

void printBoard(vector<vector<int>>& board) {
    for (int i = 0; i < board.size(); i++) {
        for (int j = 0; j < board[i].size(); j++)
            cout << board[i][j] << " ";
        cout << endl;
    }
}

int main() {
    int n = 4;
    vector<vector<int>> board(n, vector<int>(n, 0));
    if (solveNQueens(board, 0))
        printBoard(board);
    else
        cout << "Nu există soluție" << endl;
    return 0;
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

export default AlgoritmiRecursivi;
