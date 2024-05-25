import React from 'react';
import './style.css'; // importă stilurile personalizate
import { Card, Container, Button } from 'react-bootstrap';

const StructuriDate = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Structuri de Date Fundamentale</h1>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Structuri de Date de Bază</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Vectori și Liste</Card.Title>
              <Card.Text>
                Vectorii și listele sunt colecții de elemente de același tip, accesate prin indici numerici sau referințe.
              </Card.Text>
              <Card.Text>
                Exemplu de declarație și inițializare a unui vector:
              </Card.Text>
              <pre>
                <code>
                  {`int vector[5]; // Declara un vector de 5 elemente
vector[0] = 10; // Inițializează primul element cu valoarea 10`}
                </code>
              </pre>
              <Card.Text>
                Liste înlănțuite și dublu înlănțuite sunt alte tipuri de structuri de date ce permit stocarea și manipularea unei secvențe de elemente.
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unei liste înlănțuite în limbajul C:
              </Card.Text>
              <pre>
                <code>
                  {`struct Nod {
  int data;
  struct Nod *next;
};

// Inițializează o listă golă
struct Nod *head = NULL;`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Stive (Stacks)</Card.Title>
              <Card.Text>
                Stivele sunt structuri de date LIFO (Last In, First Out), unde elementele sunt adăugate și eliminate doar de la un capăt numit "vârf".
              </Card.Text>
              <Card.Text>
                Acestea sunt utilizate în mod obișnuit pentru a gestiona apelurile de funcții într-un program sau pentru evaluarea expresiilor aritmetice.
              </Card.Text>
              <Card.Text>
                Operațiile de bază ale stivelor sunt <i>push</i> (adaugă un element la vârf) și <i>pop</i> (elimină un element de la vârf).
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unei stive în limbajul C++ folosind vectori:
              </Card.Text>
              <pre>
                <code>
                  {`#include <iostream>
#include <vector>

class Stack {
private:
    std::vector<int> elements;
public:
    void push(int element) {
        elements.push_back(element);
    }

    void pop() {
        if (!elements.empty()) {
            elements.pop_back();
        }
    }

    int top() {
        if (!elements.empty()) {
            return elements.back();
        }
        return -1; // Stiva este goală
    }

    bool empty() {
        return elements.empty();
    }
};

int main() {
    Stack stack;
    stack.push(5);
    stack.push(10);
    std::cout << "Top element: " << stack.top() << std::endl; // Afiseaza: 10
    stack.pop();
    std::cout << "Top element after pop: " << stack.top() << std::endl; // Afiseaza: 5
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Cozi (Queues)</Card.Title>
              <Card.Text>
                Cozile sunt structuri de date FIFO (First In, First Out), unde elementele sunt adăugate la un capăt numit "spate" și eliminate de la celălalt capăt numit "față".
              </Card.Text>
              <Card.Text>
                Acestea sunt folosite în mod obișnuit pentru a implementa sisteme de procesare a sarcinilor (ex. un sistem de operare).
              </Card.Text>
              <Card.Text>
                Operațiile de bază ale cozilor sunt <i>enqueue</i> (adaugă un element la coadă) și <i>dequeue</i> (elimină un element de la începutul cozii).
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unei cozi în limbajul Python folosind o listă:
              </Card.Text>
              <pre>
                <code>
                  {`class Queue:
    def __init__(self):
        self.elements = []

    def enqueue(self, element):
        self.elements.append(element)

    def dequeue(self):
        if len(self.elements) > 0:
            return self.elements.pop(0)
        else:
            return None

    def front(self):
        if len(self.elements) > 0:
            return self.elements[0]
        else:
            return None

    def empty(self):
        return len(self.elements) == 0

# Exemplu de utilizare
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
print("Elementul din față:", queue.front())  # Afiseaza: 1
print("Element scos din coadă:", queue.dequeue())  # Afiseaza: 1
print("Elementul din față după dequeue:",
queue.front())  # Afiseaza: 2`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Arbori (Trees)</Card.Title>
              <Card.Text>
                Arborii sunt structuri de date ierarhice, alcătuite din noduri, fiecare nod putând avea unul sau mai mulți copii.
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unui arbore binar în limbajul Python:
              </Card.Text>
              <pre>
                <code>
                  {`class TreeNode:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

# Crearea arborelui:
#       1
#      / \\
#     2   3
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Grafuri (Graphs)</Card.Title>
              <Card.Text>
                Grafurile sunt structuri de date ce modelează relații între obiecte, constând din noduri (sau vârfuri) și muchii (sau arce) care leagă aceste noduri.
              </Card.Text>
              <Card.Text>
                Exemplu de implementare a unui graf neorientat folosind o listă de adiacență în Python:
              </Card.Text>
              <pre>
                <code>
                  {`class Graph:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.adj_list = [[] for _ in range(num_vertices)]

    def add_edge(self, src, dest):
        self.adj_list[src].append(dest)
        self.adj_list[dest].append(src)

# Crearea unui graf neorientat cu 4 vârfuri:
#    0---1
#    |   |
#    3---2
graph = Graph(4)
graph.add_edge(0, 1)
graph.add_edge(1, 2)
graph.add_edge(2, 3)
graph.add_edge(3, 0)`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          {/* Alte structuri de date */}
          {/* Poți adăuga alte Card-uri pentru alte structuri de date */}
        </Card.Body>
      </Card>

      {/* Alte categorii de structuri de date */}
      {/* Poți adăuga alte Card-uri pentru alte categorii de structuri de date */}

      <div className="text-center">
        <Button className="pagina-joc-buton" href="/materials">Înapoi la Materiale de Învățare</Button>
      </div>
    </Container>
  );
};

export default StructuriDate;
