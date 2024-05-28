import React from 'react';
import './style.css'; // importă stilurile personalizate
import { Card, Container, Button } from 'react-bootstrap';

const TeoriaGrafurilor = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Teoria Grafurilor</h1>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Introducere în Teoria Grafurilor</Card.Title>
          <Card.Text>
            Teoria grafurilor este un domeniu al matematicii și informaticii care studiază proprietățile grafurilor. Un graf este o structură compusă din noduri (sau vârfuri) și muchii (sau arce) care leagă aceste noduri.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Tipuri de Grafuri</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Grafuri Neorientate</Card.Title>
              <Card.Text>
                Un graf neorientat este un graf în care muchiile nu au direcție. Într-un astfel de graf, o muchie (u, v) este echivalentă cu muchia (v, u).
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unui graf neorientat folosind liste de adiacență în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>

class Graph {
public:
    Graph(int vertices);
    void addEdge(int v, int w);
    void printGraph();

private:
    int V;
    std::vector<std::vector<int>> adjList;
};

Graph::Graph(int vertices) {
    this->V = vertices;
    adjList.resize(vertices);
}

void Graph::addEdge(int v, int w) {
    adjList[v].push_back(w);
    adjList[w].push_back(v); // Neorientat
}

void Graph::printGraph() {
    for (int v = 0; v < V; ++v) {
        std::cout << "Nod " << v << ": ";
        for (auto x : adjList[v])
            std::cout << x << " ";
        std::cout << std::endl;
    }
}

int main() {
    Graph g(5);
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    g.printGraph();

    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Grafuri Orientate</Card.Title>
              <Card.Text>
                Un graf orientat este un graf în care muchiile au direcție. Într-un astfel de graf, o muchie (u, v) nu este echivalentă cu muchia (v, u).
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unui graf orientat folosind liste de adiacență în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>

class Digraph {
public:
    Digraph(int vertices);
    void addEdge(int v, int w);
    void printGraph();

private:
    int V;
    std::vector<std::vector<int>> adjList;
};

Digraph::Digraph(int vertices) {
    this->V = vertices;
    adjList.resize(vertices);
}

void Digraph::addEdge(int v, int w) {
    adjList[v].push_back(w); // Orientat
}

void Digraph::printGraph() {
    for (int v = 0; v < V; ++v) {
        std::cout << "Nod " << v << ": ";
        for (auto x : adjList[v])
            std::cout << x << " ";
        std::cout << std::endl;
    }
}

int main() {
    Digraph g(5);
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    g.printGraph();

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
          <Card.Title className="text-secondary">Algoritmi de Bază pentru Grafuri</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Parcurgerea în Adâncime (Depth-First Search, DFS)</Card.Title>
              <Card.Text>
                Algoritmul DFS explorează un graf pornind de la un nod sursă și explorează cât mai adânc posibil de-a lungul fiecărei ramuri înainte de a se întoarce.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>

class Graph {
public:
    Graph(int vertices);
    void addEdge(int v, int w);
    void DFS(int v);

private:
    int V;
    std::vector<std::vector<int>> adjList;
    void DFSUtil(int v, std::vector<bool>& visited);
};

Graph::Graph(int vertices) {
    this->V = vertices;
    adjList.resize(vertices);
}

void Graph::addEdge(int v, int w) {
    adjList[v].push_back(w);
}

void Graph::DFSUtil(int v, std::vector<bool>& visited) {
    visited[v] = true;
    std::cout << v << " ";

    for (int i : adjList[v]) {
        if (!visited[i]) {
            DFSUtil(i, visited);
        }
    }
}

void Graph::DFS(int v) {
    std::vector<bool> visited(V, false);
    DFSUtil(v, visited);
}

int main() {
    Graph g(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    std::cout << "DFS starting from vertex 2:" << std::endl;
    g.DFS(2);

    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Parcurgerea în Lățime (Breadth-First Search, BFS)</Card.Title>
              <Card.Text>
                Algoritmul BFS explorează un graf pornind de la un nod sursă și explorează toți vecinii acelui nod înainte de a trece la vecinii vecinilor.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <queue>

class Graph {
public:
    Graph(int vertices);
    void addEdge(int v, int w);
    void BFS(int s);

private:
    int V;
    std::vector<std::vector<int>> adjList;
};

Graph::Graph(int vertices) {
    this->V = vertices;
    adjList.resize(vertices);
}

void Graph::addEdge(int v, int w) {
    adjList[v].push_back(w);
}

void Graph::BFS(int s) {
    std::vector<bool> visited(V, false);
    std::queue<int> queue;
    visited[s] = true;
    queue.push(s);

    while (!queue.empty()) {
        s = queue.front();
        std::cout << s << " ";
        queue.pop();

        for (int i : adjList[s]) {
            if (!visited[i]) {
                visited[i] = true;
                queue.push(i);
            }
        }
    }
}

int main() {
    Graph g(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    std::cout << "BFS starting from vertex 2:" << std::endl;
    g.BFS(2);

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
          <Card.Title className="text-secondary">Algoritmi de Căutare și Drum Minim</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Algoritmul lui Dijkstra</Card.Title>
              <Card.Text>
                Algoritmul lui Dijkstra este utilizat pentru a găsi cel mai scurt drum de la un nod sursă la toate celelalte noduri dintr-un graf ponderat.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <set>
#include <limits>

class Graph {
public:
    Graph(int vertices);
    void addEdge(int u, int v, int weight);
    void dijkstra(int src);

private:
    int V;
    std::vector<std::vector<std::pair<int, int>>> adjList;
};

Graph::Graph(int vertices) {
    this->V = vertices;
    adjList.resize(vertices);
}

void Graph::addEdge(int u, int v, int weight) {
    adjList[u].emplace_back(v, weight);
    adjList[v].emplace_back(u, weight); // Pentru graf neorientat
}

void Graph::dijkstra(int src) {
    std::set<std::pair<int, int>> setds;
    std::vector<int> dist(V, std::numeric_limits<int>::max());

    setds.insert(std::make_pair(0, src));
    dist[src] = 0;

    while (!setds.empty()) {
        int u = setds.begin()->second;
        setds.erase(setds.begin());

        for (auto x : adjList[u]) {
            int v = x.first;
            int weight = x.second;

            if (dist[v] > dist[u] + weight) {
                if (dist[v] != std::numeric_limits<int>::max()) {
                    setds.erase(setds.find(std::make_pair(dist[v], v)));
                }
                dist[v] = dist[u] + weight;
                setds.insert(std::make_pair(dist[v], v));
            }
        }
    }

    std::cout << "Vertex   Distance from Source" << std::endl;
    for (int i = 0; i < V; ++i) {
        std::cout << i << "\t\t" << dist[i] << std::endl;
    }
}

int main() {
    Graph g(9);
    g.addEdge(0, 1, 4);
    g.addEdge(0, 7, 8);
    g.addEdge(1, 2, 8);
    g.addEdge(1, 7, 11);
    g.addEdge(2, 3, 7);
    g.addEdge(2, 8, 2);
    g.addEdge(2, 5, 4);
    g.addEdge(3, 4, 9);
    g.addEdge(3, 5, 14);
    g.addEdge(4, 5, 10);
    g.addEdge(5, 6, 2);
    g.addEdge(6, 7, 1);
    g.addEdge(6, 8, 6);
    g.addEdge(7, 8, 7);

    g.dijkstra(0);

    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Algoritmul lui Floyd-Warshall</Card.Title>
              <Card.Text>
                Algoritmul lui Floyd-Warshall este utilizat pentru a găsi cele mai scurte drumuri între toate perechile de noduri dintr-un graf ponderat.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
{`#include <iostream>
#include <vector>
#include <limits>

#define INF std::numeric_limits<int>::max()

void floydWarshall(const std::vector<std::vector<int>>& graph) {
    int V = graph.size();
    std::vector<std::vector<int>> dist = graph;

    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    std::cout << "Shortest distances between every pair of vertices:" << std::endl;
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (dist[i][j] == INF) {
                std::cout << "INF ";
            } else {
                std::cout << dist[i][j] << " ";
            }
        }
        std::cout << std::endl;
    }
}

int main() {
    std::vector<std::vector<int>> graph = {
        {0, 3, INF, 5},
        {2, 0, INF, 4},
        {INF, 1, 0, INF},
        {INF, INF, 2, 0}
    };

    floydWarshall(graph);

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

export default TeoriaGrafurilor;
