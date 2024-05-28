import React from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import './style.css'; // importă stilurile personalizate

const AlgoritmiClasici = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Algoritmi Clasici</h1>

      {/* Sortare */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Sortare</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Bubble Sort</Card.Title>
              <Card.Text>
                Bubble Sort este un algoritm de sortare simplu care repetă treceri prin lista, comparând elementele pereche cu pereche și schimbându-le dacă sunt în ordinea greșită.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
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
    cout << "Sorted array: ";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Insertion Sort</Card.Title>
              <Card.Text>
                Insertion Sort este un algoritm de sortare care construiește lista sortată unul câte unul, prin inserarea fiecărui element la poziția corectă.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6};
    insertionSort(arr);
    cout << "Sorted array: ";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Selection Sort</Card.Title>
              <Card.Text>
                Selection Sort este un algoritm de sortare care împarte lista în două părți: o parte sortată și o parte nesortată, selectând repetat cel mai mic element din partea nesortată și mutându-l în partea sortată.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        swap(arr[min_idx], arr[i]);
    }
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    selectionSort(arr);
    cout << "Sorted array: ";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Merge Sort</Card.Title>
              <Card.Text>
                Merge Sort este un algoritm de sortare eficient care utilizează metoda divide et impera pentru a împărți lista în subliste, le sortează și le combină pentru a obține lista sortată finală.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};
    mergeSort(arr, 0, arr.size() - 1);
    cout << "Sorted array: ";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Quick Sort</Card.Title>
              <Card.Text>
                Quick Sort este un algoritm de sortare eficient, bazat pe divizare și stăpânire, care alege un element pivot și împarte lista în două subliste în funcție de pivot, apoi recursiv sortează aceste subliste.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, arr.size() - 1);
    cout << "Sorted array: ";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      {/* Căutare */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-secondary">Căutare</Card.Title>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Linear Search</Card.Title>
              <Card.Text>
                Linear Search este un algoritm de căutare simplu care verifică fiecare element al listei până când valoarea căutată este găsită sau lista este epuizată.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int x) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == x)
            return i;
    }
    return -1;
}

int main() {
    vector<int> arr = {2, 3, 4, 10, 40};
    int x = 10;
    int result = linearSearch(arr, x);
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
              <Card.Title>Binary Search</Card.Title>
              <Card.Text>
                Binary Search este un algoritm de căutare eficient într-o listă sortată. El compară valoarea căutată cu elementul din mijloc al listei și elimină jumătatea în care valoarea nu poate fi situată.
              </Card.Text>
              <Card.Text>
                Implementare în C++:
              </Card.Text>
              <pre className="code-block">
                <code>
                  {`#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int x) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] < x)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> arr = {2, 3, 4, 10, 40};
    int x = 10;
    int result = binarySearch(arr, x);
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
        </Card.Body>
      </Card>

      {/* Alte categorii de algoritmi clasici */}
      {/* Poți adăuga alte Card-uri pentru alte categorii de algoritmi clasici */}

      <div className="text-center">
        <Button className="pagina-joc-buton" href="/materials">Înapoi la Materiale de Învățare</Button>
      </div>
    </Container>
  );
};

export default AlgoritmiClasici;
