import React from 'react';
import './style.css'; // importă stilurile personalizate
import { Card, Container, Button } from 'react-bootstrap';

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
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:", arr)`}
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
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

arr = [12, 11, 13, 5, 6]
insertion_sort(arr)
print("Sorted array:", arr)`}
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
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print("Sorted array:", arr)`}
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
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

arr = [12, 11, 13, 5, 6, 7]
merge_sort(arr)
print("Sorted array:", arr)`}
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
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i+1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi-1)
        quick_sort(arr, pi+1, high)

arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quick_sort(arr, 0, n-1)
print("Sorted array:", arr)`}
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
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def linear_search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

arr = [2, 3, 4, 10, 40]
x = 10
result = linear_search(arr, x)
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
              <Card.Title>Binary Search</Card.Title>
              <Card.Text>
                Binary Search este un algoritm de căutare eficient într-o listă sortată. El compară valoarea căutată cu elementul din mijloc al listei și elimină jumătatea în care valoarea nu poate fi situată.
              </Card.Text>
              <Card.Text>
                Implementare în Python:
              </Card.Text>
              <pre>
                <code>
                  {`def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < x:
            low = mid + 1
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid
    return -1

arr = [2, 3, 4, 10, 40]
x = 10
result = binary_search(arr, x)
if result != -1:
    print("Elementul este prezent în indexul", result)
else:
    print("Elementul nu este prezent în lista")`}
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
