import React from 'react';
import './style.css'; // importă stilurile personalizate
import { Card, Container, Button } from 'react-bootstrap';

const ProgramareDinamica = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Programarea Dinamică</h1>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Introducere în Programarea Dinamică</Card.Title>
          <Card.Text>
            Programarea Dinamică (DP) este o tehnică de optimizare a algoritmilor, utilizată pentru a rezolva probleme complexe prin împărțirea acestora în subprobleme mai mici și memorarea soluțiilor intermediare pentru a evita recalcularea acestora.
          </Card.Text>
          <Card.Text>
            Programarea Dinamică este utilizată în general pentru problemele de optimizare și problemele de decizie care pot fi împărțite în subprobleme suprapuse. Soluțiile subproblemelor sunt stocate într-o structură de date, cum ar fi un tabel, pentru a evita recalcularea acestora.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Tehnici Fundamentale în Programarea Dinamică</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Fibonacci</Card.Title>
              <Card.Text>
                Problema Fibonacci este un exemplu clasic de programare dinamică. Funcția Fibonacci este definită recursiv, dar recalcularea valorilor pentru fiecare apel recursiv poate fi ineficientă. Prin memorarea valorilor intermediare, putem optimiza algoritmul.
              </Card.Text>
              <Card.Text>
                Implementare recursivă simplă:
              </Card.Text>
              <pre className="code-block">
                <code>
{`// Funcție recursivă simplă pentru Fibonacci
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}`}
                </code>
              </pre>
              <Card.Text>
                Implementare cu memorare (memoization):
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>

int fibMemo(int n, std::vector<int>& memo) {
    if (memo[n] != -1) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

int fib(int n) {
    std::vector<int> memo(n + 1, -1);
    return fibMemo(n, memo);
}

int main() {
    int n = 10;
    std::cout << "Fibonacci(" << n << ") = " << fib(n) << std::endl;
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Problema Rucsacului (Knapsack Problem)</Card.Title>
              <Card.Text>
                Problema rucsacului este o problemă de optimizare clasică unde, având un rucsac cu o capacitate limitată și o colecție de obiecte fiecare cu o greutate și o valoare asociată, trebuie să se determine care obiecte să fie incluse în rucsac astfel încât valoarea totală să fie maximă fără a depăși capacitatea.
              </Card.Text>
              <Card.Text>
                Implementare în C++ utilizând programare dinamică:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <algorithm>

int knapsack(int W, const std::vector<int>& wt, const std::vector<int>& val, int n) {
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(W + 1));

    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (i == 0 || w == 0) {
                dp[i][w] = 0;
            } else if (wt[i - 1] <= w) {
                dp[i][w] = std::max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}

int main() {
    int W = 50;
    std::vector<int> wt = {10, 20, 30};
    std::vector<int> val = {60, 100, 120};
    int n = wt.size();
    std::cout << "Maximum value in Knapsack = " << knapsack(W, wt, val, n) << std::endl;
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Problema Drumului Minim (Minimum Path Sum)</Card.Title>
              <Card.Text>
                Aceasta problemă constă în găsirea drumului cu suma minimă dintr-o matrice de dimensiuni m x n pornind de la colțul din stânga sus până la colțul din dreapta jos, deplasându-ne doar în jos sau la dreapta.
              </Card.Text>
              <Card.Text>
                Implementare în C++ utilizând programare dinamică:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <algorithm>

int minPathSum(const std::vector<std::vector<int>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    std::vector<std::vector<int>> dp(m, std::vector<int>(n, 0));
    
    dp[0][0] = grid[0][0];
    
    for (int i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    
    for (int j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = std::min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    
    return dp[m - 1][n - 1];
}

int main() {
    std::vector<std::vector<int>> grid = {
        {1, 3, 1},
        {1, 5, 1},
        {4, 2, 1}
    };
    std::cout << "Minimum path sum = " << minPathSum(grid) << std::endl;
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Problema Subsirului Comun Maxim (Longest Common Subsequence)</Card.Title>
              <Card.Text>
                Această problemă constă în găsirea lungimii celui mai lung subsir comun a două șiruri de caractere.
              </Card.Text>
              <Card.Text>
                Implementare în C++ utilizând programare dinamică:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

int lcs(const std::string& X, const std::string& Y) {
    int m = X.size();
    int n = Y.size();
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (X[i - 1] == Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

int main() {
    std::string X = "AGGTAB";
    std::string Y = "GXTXAYB";
    std::cout << "Length of LCS = " << lcs(X, Y) << std::endl;
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Probleme Avansate de Programare Dinamică</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Problema Drumului Minim pe o Grilă 3D (Minimum Path Sum in 3D Grid)</Card.Title>
              <Card.Text>
                Această problemă extinde problema drumului minim la o matrice tridimensională. Trebuie să găsim drumul cu suma minimă de la un colț al grilei la altul, deplasându-ne doar înainte în direcțiile permise.
              </Card.Text>
              <Card.Text>
                Implementare în C++ utilizând programare dinamică:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <algorithm>

int minPathSum3D(const std::vector<std::vector<std::vector<int>>>& grid) {
    int x = grid.size();
    int y = grid[0].size();
    int z = grid[0][0].size();
    std::vector<std::vector<std::vector<int>>> dp(x, std::vector<std::vector<int>>(y, std::vector<int>(z, 0)));

    dp[0][0][0] = grid[0][0][0];

    for (int i = 1; i < x; i++) {
        dp[i][0][0] = dp[i - 1][0][0] + grid[i][0][0];
    }

    for (int j = 1; j < y; j++) {
        dp[0][j][0] = dp[0][j - 1][0] + grid[0][j][0];
    }

    for (int k = 1; k < z; k++) {
        dp[0][0][k] = dp[0][0][k - 1] + grid[0][0][k];
    }

    for (int i = 1; i < x; i++) {
        for (int j = 1; j < y; j++) {
            dp[i][j][0] = std::min(dp[i - 1][j][0], dp[i][j - 1][0]) + grid[i][j][0];
        }
    }

    for (int i = 1; i < x; i++) {
        for (int k = 1; k < z; k++) {
            dp[i][0][k] = std::min(dp[i - 1][0][k], dp[i][0][k - 1]) + grid[i][0][k];
        }
    }

    for (int j = 1; j < y; j++) {
        for (int k = 1; k < z; k++) {
            dp[0][j][k] = std::min(dp[0][j - 1][k], dp[0][j][k - 1]) + grid[0][j][k];
        }
    }

    for (int i = 1; i < x; i++) {
        for (int j = 1; j < y; j++) {
            for (int k = 1; k < z; k++) {
                dp[i][j][k] = std::min({dp[i - 1][j][k], dp[i][j - 1][k], dp[i][j][k - 1]}) + grid[i][j][k];
            }
        }
    }

    return dp[x - 1][y - 1][z - 1];
}

int main() {
    std::vector<std::vector<std::vector<int>>> grid = {
        {
            {1, 3, 1},
            {1, 5, 1},
            {4, 2, 1}
        },
        {
            {1, 2, 2},
            {3, 4, 1},
            {2, 3, 2}
        },
        {
            {2, 3, 1},
            {1, 1, 2},
            {3, 2, 1}
        }
    };
    std::cout << "Minimum path sum in 3D grid = " << minPathSum3D(grid) << std::endl;
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Problema Drumului Maxim pe un Triunghi (Maximum Path Sum in a Triangle)</Card.Title>
              <Card.Text>
                Această problemă constă în găsirea drumului cu suma maximă de la vârful unui triunghi până la baza acestuia, deplasându-ne doar în jos sau în diagonală stânga-dreapta.
              </Card.Text>
              <Card.Text>
                Implementare în C++ utilizând programare dinamică:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <algorithm>

int maxPathSumTriangle(const std::vector<std::vector<int>>& triangle) {
    int n = triangle.size();
    std::vector<std::vector<int>> dp = triangle;

    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j <= i; j++) {
            dp[i][j] += std::max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}

int main() {
    std::vector<std::vector<int>> triangle = {
        {2},
        {3, 4},
        {6, 5, 7},
        {4, 1, 8, 3}
    };
    std::cout << "Maximum path sum in triangle = " << maxPathSumTriangle(triangle) << std::endl;
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

export default ProgramareDinamica;
