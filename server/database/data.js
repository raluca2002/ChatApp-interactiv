module.exports = [
    {
        id: 1,
        question: `Se consideră algoritmul decide(n, x), unde n este număr natural (1 ≤ n ≤ 10000), iar x este un vector cu n elemente numere întregi (x[1], x[2], ..., x[n], -100 ≤ x[i] ≤ 100, pentru i = 1, 2, ..., n):

\`\`\`
Algorithm decide(n, x):
    b ← True
    i ← 1
    While b = True AND i < n execute
        If x[i] < x[i + 1] then
            b ← True
        else
            b ← False
        EndIf
        i ← i + 1
    EndWhile
    return b
EndAlgorithm
\`\`\`
Pentru care din următoarele situații algoritmul returnează True?`,
        options: [
            "Dacă vectorul x este format din valorile 1, 2, 3, ..., 10.",
            "Dacă vectorul x este strict crescător.",
            "Dacă vectorul x nu are elemente negative.",
            "Dacă vectorul x are elemente pozitive situate înaintea celor negative."
        ]
    },
    {
        id: 2,
        question: `Se consideră un număr natural fără cifre egale cu zero, dat prin șirul a (a[1], a[2], ..., a[n]) în care se află cele n cifre ale sale (1 ≤ n ≤ 10 la momentul apelului inițial). Precizați care dintre următorii algoritmi returnează True dacă un număr dat sub această formă este palindrom și False în caz contrar. Un număr este palindrom dacă citit de la stânga la dreapta are aceeași valoare ca atunci când se citește de la dreapta la stânga.
\`\`\`
Algorithm palindrom_1(a, n):
    i ← 1
    j ← n
    k ← True
    While (i ≤ j) AND (k = True) execute
        If a[i] = a[j] then
            i ← i + 1
            j ← j - 1
        else
            k ← False
        EndIf
    EndWhile
    return k
EndAlgorithm

Algorithm palindrom_2(a, n):
    j ← n
    If (j = 0) OR (j = 1) then
        return True
    EndIf
    If a[1] = a[j] then
        translatare(a, n)
        return palindrom_2(a, n - 2)
    EndIf
    return False
EndAlgorithm

Algorithm palindrom_3(a, n):
    i ← n
    j ← 1
    k ← True
    sum1 ← 0
    sum2 ← 0
    While (i > n DIV 2) AND (j ≤ n DIV 2)
        sum1 ← sum1 + a[i]
        sum2 ← sum2 + a[j]
        i ← i - 1
        j ← j + 1
    EndWhile
    If sum1 = sum2 then
        k ← True
    else
        k ← False
    EndIf
    return k
EndAlgorithm

Algorithm palindrom_4(a, n):
    i ← 1
    j ← n
    k ← True
    While (i ≤ j) AND (k = True) execute
        If (a[i] = a[j]) AND (i MOD 2 = 0) AND (j MOD 2 = 0) then
            i ← i + 1
            j ← j - 1
        else
            k ← False
        EndIf
    EndWhile
    return k
EndAlgorithm
\`\`\``,
        options: [
            "Algorithm palindrom_1(a, n)",
            "Algorithm palindrom_2(a, n)",
            "Algorithm palindrom_3(a, n)",
            "Algorithm palindrom_4(a, n)"
        ]
    },
    {
        id: 3,
        question: `Se consideră algoritmul F(n), unde n este număr natural (1 ≤ n ≤ 10^9).
\`\`\`
Algorithm F(n):
    If n < 10 then
        return n
    EndIf
    u ← n MOD 10
    p ← F(n DIV 10)
    If u MOD 5 ≤ p MOD 5 then
        return u
    EndIf
    return p
EndAlgorithm
\`\`\`
Precizați care dintre următoarele afirmații sunt corecte:`,
        options: [
            "Dacă n = 812376, valoarea returnată de algoritm este 6.",
            "Dacă n = 82331, valoarea returnată de algoritm este 1.",
            "Dacă n = 486, valoarea returnată de algoritm este 8.",
            "Dacă n = 515, valoarea returnată de algoritm este 0."
        ]
    },
    {
        id: 4,
        question: `Se consideră algoritmul f(n), unde parametrul n este număr natural (1 ≤ n ≤ 10^9).
\`\`\`
Algorithm f(n):
    v ← 0; z ← 0;
    For c ← 0, 9 execute
        x ← n
        k ← 0
        While x > 0 execute
            If x MOD 10 = c then
                k ← k + 1
            EndIf
            x ← x DIV 10
        EndWhile
        If k > v then
            v ← k
            z ← c
        EndIf
    EndFor
    return z
EndAlgorithm
\`\`\`
Care dintre afirmațiile următoare sunt adevărate?`,
        options: [
            "Algoritmul returnează numărul cifrelor numărului n.",
            "Algoritmul returnează numărul de apariții ale cifrei cu valoarea cea mai mare în numărul n.",
            "Algoritmul returnează una dintre cifrele cu cel mai mare număr de apariții în numărul n.",
            "Algoritmul returnează numărul cifrelor având cel mai mare număr de apariții în numărul n."
        ]
    },
    {
        id: 5,
        question: `Care dintre următorii algoritmi afișează reprezentarea binară a numărului natural x dat ca parametru (0 < x ≤ 10^9 la momentul apelului inițial)?
\`\`\`

Algorithm imp(x):
\`\`\`
    If x = 0 then
\`\`\`
        r ← x MOD 2
        imp(x DIV 2)
        write r
    EndIf
EndAlgorithm

Algorithm imp(x):
    If x ≠ 0 then
        r ← x MOD 2
        imp(x DIV 2)
        write r
    EndIf
EndAlgorithm

Algorithm imp(x):
    If x = 0 then
        r ← x DIV 2
        imp(x DIV 2)
        write r
    EndIf
EndAlgorithm

Algorithm imp(x):
    If x ≠ 0 then
        r ← x MOD 2
        imp(x)
        write r
    EndIf
EndAlgorithm
\`\`\``,
        options: [
            "Algorithm imp(x): If x = 0 then r ← x MOD 2 imp(x DIV 2) write r EndIf EndAlgorithm",
            "Algorithm imp(x): If x ≠ 0 then r ← x MOD 2 imp(x DIV 2) write r EndIf EndAlgorithm",
            "Algorithm imp(x): If x = 0 then r ← x DIV 2 imp(x DIV 2) write r EndIf EndAlgorithm",
            "Algorithm imp(x): If x ≠ 0 then r ← x MOD 2 imp(x) write r EndIf EndAlgorithm"
        ]
    },
    {
        id: 6,
        question: `Se consideră numerele întregi a și b (-1000 ≤ a, b ≤ 1000) și expresia: NOT ((a > 0) AND (b > 0)). Care dintre următoarele expresii sunt echivalente cu expresia dată mai sus:
\`\`\`
NOT ((a > 0) AND (b > 0))
\`\`\``,
        options: [
            "(NOT(a<0))AND(NOT(b<0))",
            "(a≤0)AND(b≤0)",
            "(NOT(a>0))OR(NOT(b>0))",
            "NOT((a>0)OR(b<0))"
        ]
    },
    {
        id: 7,
        question: `Se consideră numerele întregi a și b (-1000 ≤ a, b ≤ 1000) și expresia: NOT ((a > 0) AND (b > 0)). Care dintre următoarele expresii sunt echivalente cu expresia dată mai sus:
\`\`\`
NOT ((a > 0) AND (b > 0))
\`\`\``,
        options: [
            "(NOT(a<0))AND(NOT(b<0))",
            "(a≤0)AND(b≤0)",
            "(NOT(a>0))OR(NOT(b>0))",
            "NOT((a>0)OR(b<0))"
        ]
    },
    {
        id: 8,
        question: `Se consideră algoritmul s(n), unde n este număr natural (2 ≤ n ≤ 10). Operatorul / reprezintă împărțirea reală (ex. 3 / 2 = 1,5).
\`\`\`
Algorithm s(n):
    p ← 1
    x ← 0
    For k = 0, n - 1 execute
        p ← p * (k + 1)
        x ← x + 1 / p
    EndFor
    return x
EndAlgorithm
\`\`\`
Precizați care dintre următoarele sume este returnată de algoritmul dat.`,
        options: [
            "∑ (k = 0 to n - 1) 1 / k",
            "∑ (k = 1 to n) 1 / k!",
            "∑ (k = 0 to n) 1 / k!",
            "∑ (k = 1 to n) 1 / k"
        ]
    },
    {
        id: 9,
        question: `Se consideră algoritmul ceFace(n), unde n este număr natural pozitiv (1 ≤ n ≤ 10000).
\`\`\`
Algorithm ceFace(n):
    m ← 0
    p ← 10
    While p < n execute
        r ← n MOD p
        m ← m + r
        p ← p * 10
    EndWhile
    return m
EndAlgorithm
\`\`\`
Precizați care dintre următoarele afirmații sunt adevărate:`,
        options: [
            "Pentru n = 125 algoritmul returnează valoarea 521.",
            "Algoritmul ceFace(n) returnează oglinditul numărului n.",
            "Pentru n = 125 algoritmul returnează valoarea 52.",
            "Algoritmul ceFace(n) returnează suma cifrelor numărului n."
        ]
    },
    {
        id: 10,
        question: `Se consideră algoritmul f(v, n), unde n este număr natural nenul (1 ≤ n ≤ 10000) și v este un vector cu n numere naturale pozitive (v[1], v[2], ..., v[n]). Presupunem că algoritmul prim(d) returnează True dacă d (număr natural) este prim și False în caz contrar.
\`\`\`
Algorithm f(v, n):
    x ← 1
    a ← 0
    For i ← 1, n execute
        For d ← 2, (v[i] DIV 2) execute
            If (prim(d) = True) AND (v[i] MOD d = 0) then
                x ← x * d
            EndIf
        EndFor
    EndFor
    For d ← 2, (x DIV 2) execute
        If (x MOD d = 0) AND (prim(d) = True) then
            a ← a + 1
        EndIf
    EndFor
    return a
EndAlgorithm
\`\`\`
Precizați care dintre următoarele afirmații sunt adevărate:`,
        options: [
            "Algoritmul returnează numărul divizorilor proprii primi distincți ai tuturor numerelor din vectorul v.",
            "Algoritmul returnează produsul divizorilor primi ai numerelor din vectorul v.",
            "Algoritmul returnează numărul numerelor prime din vectorul v.",
            "Algoritmul returnează numărul total al tuturor divizorilor numerelor din vectorul v."
        ],
        answer: 1
    },
    {
        id: 11,
        question: `Se consideră algoritmul f(n), unde n este număr natural (0 < n ≤ 10^9 la momentul apelului). Variabila locală v este un vector.
\`\`\`
Algorithm f(n):
    m ← 0
    While n > 0 execute
        m ← m + 1
        v[m] ← n MOD 10
        n ← n DIV 10
    EndWhile
    x ← 0
    mx ← 0
    While mx > -1 execute
        x ← x * 10 + mx
        mx ← -1
        j ← 1
        For i = 1, m execute
            If v[i] > mx then
                j ← i
                mx ← v[i]
            EndIf
        EndFor
        v[j] ← -1
    EndWhile
    return x
EndAlgorithm
\`\`\`
Precizați care dintre următoarele afirmații sunt adevărate:`,
        options: [
            "Algoritmul returnează cel mai mare număr care se poate obține folosind cifrele lui n.",
            "Algoritmul returnează cea mai mare putere a lui 10 care divide numărul n.",
            "Algoritmul returnează prima cifră din stânga a numărului n.",
            "Algoritmul returnează suma cifrelor numărului n."
        ],
        answer: 1
    },
    {
        id: 12,
        question: `Se consideră algoritmul f(n), unde parametrul n este număr natural (1 ≤ n ≤ 10002 la momentul apelului).
\`\`\`
Algorithm f(n):
    z ← 0; p ← 1;
    While n ≠ 0 execute
        c ← n MOD 10
        n ← n DIV 10
        If c MOD 3 = 0 then
            z ← z + p * (9 – c)
            p ← p * 10
        EndIf
    EndWhile
    return z
EndAlgorithm
\`\`\`
Care este valoarea returnată dacă algoritmul se apelează pentru n = 103456?`,
        options: [
            "639",
            "963",
            "693",
            "369"
        ],
        answer: 3
    },
    {
        id: 13,
        question: `Se consideră algoritmul f(n) dat în enunțul anterior, dar acum parametrul n este număr natural cu două cifre (10 ≤ n ≤ 99 la momentul apelului).
Care dintre următoarele variante conțin doar numere pentru care algoritmul returnează valoarea 3?`,
        options: [
            "61, 65, 67",
            "62, 66, 68",
            "16, 56, 76",
            "26, 66, 86"
        ],
        answer: 3
    },
    {
        id: 14,
        question: `Se dă algoritmul ceFace(a, b), unde a și b sunt numere naturale pozitive (1 ≤ a, b ≤ 10000).
\`\`\`
Algorithm ceFace(a, b):
    For i ← 2, a, 2 execute
        If a MOD i = 0 then
            If b MOD i = 0 then
                Write i
                Write new line
            EndIf
        EndIf
    EndFor
EndAlgorithm
\`\`\`
Dacă a = 600, precizați pentru care valori ale lui b se afișează 4 numere în urma executării algoritmului ceFace(a, b):`,
        options: [
            "b=20",
            "b=50",
            "b=12",
            "b=90"
        ],
        answer: 1
    },
    {
        id: 15,
        question: `Se consideră algoritmul f(n) dat în enunțul anterior, dar acum parametrul n este număr natural cu două cifre (10 ≤ n ≤ 99 la momentul apelului).
        Care dintre următoarele variante conțin doar numere pentru care algoritmul returnează valoarea 3?`,
                options: [
                    "61, 65, 67",
                    "62, 66, 68",
                    "16, 56, 76",
                    "26, 66, 86"
                ],
                answer: 3
    },
    {
        id: 16,
        question: `Fie un program care generează, în ordine crescătoare, toate numerele naturale de exact 5 cifre distincte care se pot forma cu cifrele 2, 3, 4, 5, 6. Precizați numărul generat imediat înainte și numărul generat imediat după secvența următoare: 34256, 34265, 34526, 34562.`,
        options: [
            "32645 și 34625",
            "32654 și 34655",
            "32654 și 34625",
            "32645 și 34655"
        ],
        answer: 3
    },
    {
        id: 17,
        question: `Fie șirul x = (1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, ...), care se continuă conform regulii care se poate observa din elementele enumerate. Considerând că primul element din șir este pe poziția 1, în care dintre următoarele subsecvențe va apărea doar valoarea 11?`,
        options: [
            "x[100], ..., x[109]",
            "x[113], ..., x[120]",
            "x[140], ..., x[152]",
            "x[123], ..., x[132]"
        ],
        answer: 3
    },
    {
        id: 18,
        question: `Câte din primele 100 de elemente ale șirului x descris în subiectul anterior sunt numere prime?`,
        options: [
            "4",
            "34",
            "36",
            "30"
        ],
        answer: 3
    },
    {
        id: 19,
        question: `Se consideră numerele naturale a și n (1 ≤ a, n ≤ 1000), vectorul V cu n elemente numere naturale (V[1], V[2], ..., V[n]) și algoritmii one(a, n, V) și two(a, n, V):
\`\`\`
Algorithm one(a, n, V):
    p ← 1;
    i ← 1;
    While (i ≤ n) AND (a > V[p]) execute
        p ← p + 1
        i ← i + 1
    EndWhile
    return p
EndAlgorithm

Algorithm two(a, n, V):
    p ← 1;
    i ← 1;
    While i ≤ n execute
        If a > V[i] then
            p ← p + 1
        EndIf
        i ← i + 1
    EndWhile
    return p
EndAlgorithm
\`\`\`
Ce proprietate poate avea vectorul V, astfel încât, pentru orice n și V cu proprietatea dată, cei doi algoritmi să returneze valori egale pentru orice valoare a lui a?`,
        options: [
            "În vectorul V toate elementele sunt egale.",
            "În vectorul V toate elementele sunt distincte și sortate crescător.",
            "În vectorul V toate elementele sunt distincte și sortate descrescător.",
            "În vectorul V elementele sunt sortate crescător, dar nu sunt neapărat distincte."
        ],
        answer: 2
    },
    {
        id: 20,
        question: `Se consideră algoritmul suma(n) unde n este număr natural (0 < n ≤ 10000 la momentul apelului inițial).
\`\`\`
Algorithm suma(n):
    If n = 0 then
        return 0
    else
        return suma(n - 1) + n DIV (n + 1) + (n + 1) DIV n
    EndIf
EndAlgorithm
\`\`\`
Care dintre afirmațiile de mai jos NU sunt adevărate?`,
        options: [
            "Algoritmul returnează valoarea n + 1",
            "Algoritmul calculează și returnează suma divizorilor proprii ai lui n",
            "Apelul suma(1) returnează 2",
            "Algoritmul calculează și returnează dublul părții întregi a mediei aritmetice a primelor n numere naturale"
        ],
        answer: 2
    },
    {
        id: 21,
        question: `Fie următorul algoritm, având ca parametri de intrare numerele naturale a și b (0 ≤ a, b ≤ 10000 la momentul apelului inițial):
\`\`\`
Algorithm ceFace(a, b):
    While a * b ≠ 0 execute
        If a > b then
            return ceFace(a MOD b, b)
        else
            return ceFace(a, b MOD a)
        EndIf
    EndWhile
    return a + b
EndAlgorithm
\`\`\`
Precizați care dintre următoarele afirmații sunt adevărate:`,
        options: [
            "Algoritmul returnează suma numerelor a și b.",
            "Algoritmul returnează numărul nenul x în urma apelului ceFace(x, 0) sau ceFace(0, x), respectiv 0 pentru ceFace(0, 0).",
            "Algoritmul returnează cel mai mare divizor comun al numerelor a și b.",
            "Algoritmul returnează a la puterea b."
        ],
        answer: 3
    },
    {
        id: 22,
        question: `Se consideră algoritmul afișare(n) unde n este număr natural (1 ≤ n ≤ 10^9):
\`\`\`
Algorithm afișare(n):
    For i = 1, n – 1 execute
        For j = i + 1, n execute
            If (j – i) < (n DIV 2) then
                Write i, " ", j – i
                Write new line
            else
                If (j – i) ≠ (n DIV 2) then
                    Write j – i, " ", i
                    Write new line
                EndIf
            EndIf
        EndFor
    EndFor
EndAlgorithm
\`\`\`
Câte perechi de numere se vor afișa în urma execuției algoritmului pentru n = 7?`,
        options: [
            "21",
            "15",
            "11",
            "17"
        ],
        answer: 2
    },
    {
        id: 23,
        question: `Considerând secvența de cod de mai jos, determinați de câte ori se afișează șirul de caractere UBB, știind că n = 3k, unde k este număr natural (1 ≤ k ≤ 30)?
\`\`\`
j ← n
While j > 1 execute
    i ← 1
    While i ≤ n execute
        i ← 3 * i
        Write 'UBB'
    EndWhile
    j ← j DIV 3
EndWhile
\`\`\`
`,
        options: [
            "k²",
            "k * 3k",
            "k * (k + 1)",
            "3 * k"
        ],
        answer: 3
    },
    {
        id: 24,
        question: `Se dau următoarele secvențe de cod și numerele naturale i, j, a, b (1 < a, b ≤ 10^9).
\`\`\`
Secvența 1 (S1):
i ← 1
While i ≠ b execute
    j ← 1
    While j ≠ a execute
        Write '*'
        j ← j + 1
    EndWhile
    i ← i + 1
EndWhile

Secvența 2 (S2):
i ← 1
While i ≠ a execute
    j ← 1
    While j ≠ b execute
        Write '*'
        j ← j + 1
    EndWhile
    i ← i + 1
EndWhile
\`\`\`
Care dintre afirmațiile următoare sunt adevărate?`,
        options: [
            "Numărul de caractere afișate de secvența S1 este diferit față de numărul de caractere afișate de secvența S2.",
            "Ambele secvențe au aceeași complexitate timp.",
            "Numărul de caractere afișate de secvența S1 este (a – 1) * (b – 1).",
            "Numărul de caractere afișate de secvența S2 este a * b."
        ],
        answer: 2
    },
    {
        id: 25,
        question: `Se consideră algoritmul ceFace(nr), unde nr este un număr natural (100 ≤ nr ≤ 2 * 10^9 la momentul apelului).
\`\`\`
Algorithm testProprietateNr(n):
    If n ≤ 1 then
        return False
    EndIf
    d ← 2
    While d * d ≤ n execute
        If n MOD d = 0 then
            return False
        EndIf
        d ← d + 1
    EndWhile
    return True
EndAlgorithm

Algorithm ceFace(nr):
    s ← 0
    c1 ← nr MOD 10
    nr ← nr DIV 10
    c2 ← nr MOD 10
    nr ← nr DIV 10
    While nr ≠ 0 execute
        c3 ← nr MOD 10
        t ← c3 * 100 + c2 * 10 + c1
        If testProprietateNr(t) then
            s ← s + c1 + c2 + c3
        EndIf
        c1 ← c2
        c2 ← c3
        nr ← nr DIV 10
    EndWhile
    return s
EndAlgorithm
\`\`\`
Precizați valoarea pe care o returnează algoritmul ceFace(nr) pentru nr = 1271211312?`,
        options: [
            "31",
            "32",
            "33",
            "34"
        ],
        answer: 3
    },
    {
        id: 26,
        question: `Care dintre următorii algoritmi determină corect și returnează valoarea rădăcinii pătrate a numărului natural n (0 < n < 10^5), rotunjit în jos la cel mai apropiat întreg. Operatorul / reprezintă împărțirea reală (ex. 3 / 2 = 1,5).
\`\`\`
Algorithm radical_A(n):
    x ← 0
    z ← 1
    While z * z ≤ n execute
        x ← z
        z ← z + 1
    EndWhile
    return x
EndAlgorithm

Algorithm radical_B(n):
    s ← 1
    d ← n DIV 2
    While s < d execute
        k ← (s + d) DIV 2
        If k * k ≥ n then
            d ← k
        else
            s ← k + 1
        EndIf
    EndWhile
    If s * s ≤ n then
        return s
    else
        return s - 1
    EndIf
EndAlgorithm

Algorithm radical_C(n, x):
    eps ← 0.001
    y ← 0.5 * (x + n / x)
    If x - y < eps then
        return [x]
    EndIf
    return radical_C(n, y)
EndAlgorithm

Algorithm radical_D(n):
    s ← 0
    p ← 0
    k ← 0
    While k < n execute
        k ← k + 3 + p
        p ← p + 2
        s ← s + 1
    EndWhile
    return s
EndAlgorithm
\`\`\`
`,
        options: [
            "Algorithm radical_A(n)",
            "Algorithm radical_B(n)",
            "Algorithm radical_C(n)",
            "Algorithm radical_D(n)"
        ],
        answer: 1
    },
    {
        id: 27,
        question: `Știind că x este număr natural, care dintre următoarele expresii au valoarea True dacă și numai dacă x este număr par care NU aparține intervalului deschis (10, 20)?`,
        options: [
            "NOT((x > 10) AND (x < 20)) AND (NOT(x MOD 2 = 1))",
            "(x MOD 2 = 0) AND ((x < 10) OR (x > 20))",
            "NOT(x MOD 2 = 1) AND ((x > 10) AND (x < 20))",
            "NOT((x MOD 4 = 1) OR (x MOD 4 = 3) OR ((x > 10) AND (x < 20)))"
        ],
        answer: 2
    },
    {
        id: 28,
        question: `Se dă un șir a de n numere naturale distincte (a[1], a[2], ..., a[n], 2 ≤ n ≤ 1000) ordonate strict crescător. Într-un șir se numește vârf local un număr cu proprietatea că este strict mai mare decât numărul de pe poziția anterioară, dar și decât numărul de pe poziția următoare. Primul și ultimul element din șir nu pot fi vârfuri locale. Se dorește un algoritm rearanjare(a, n) care rearanjează valorile din șir astfel încât șirul să aibă un număr maxim de vârfuri locale și returnează noul șir. Variabila locală b este un șir. Care dintre următorii algoritmi sunt corecți?
\`\`\`
Algorithm rearanjare(a, n):
    i ← n
    For p ← 2, n, 2 execute
        b[p] ← a[i]
        i ← i – 1
    EndFor
    For p ← 1, n, 2 execute
        b[p] ← a[i]
        i ← i – 1
    EndFor
    return b
EndAlgorithm

Algorithm rearanjare(a, n):
    i ← n
    For p ← 2, n, 2 execute
        b[p] ← a[i]
        i ← i – 1
    EndFor
    For p ← 1, n, 2 execute
        b[p - 1] ← a[i]
        i ← i – 1
    EndFor
    If n MOD 2 = 1 then
        b[n] ← a[i]
    EndIf
    return b
EndAlgorithm

Algorithm rearanjare(a, n):
    i ← n
    For p ← 2, n, 3 execute
        b[p] ← a[i]
        i ← i – 1
    EndFor
    If n MOD 3 = 1 then
        b[n] ← a[i]
    EndIf
    return b
EndAlgorithm

Algorithm rearanjare(a, n):
    i ← n
    For p ← 2, n, 2 execute
        b[p] ← a[i]
        i ← i – 1
    EndFor
    For p ← 1, n, 2 execute
        If p + 1 ≤ n then
            b[p] ← a[i]
            b[p + 1] ← a[i]
            i ← i + 1
        EndIf
    EndFor
    return b
EndAlgorithm
\`\`\`
`,
        options: [
            "Algorithm rearanjare(a, n) varianta 1",
            "Algorithm rearanjare(a, n) varianta 2",
            "Algorithm rearanjare(a, n) varianta 3",
            "Algorithm rearanjare(a, n) varianta 4"
        ],
        answer: 1
    },
    {
        id: 29,
        question: `Se consideră algoritmul f(n, p1, p2), unde n, p1 și p2 sunt numere naturale strict pozitive (1 < n, p1, p2 ≤ 10^4 la momentul apelului).
\`\`\`
Algorithm f(n, p1, p2):
    c ← 0
    While p1 ≤ n execute
        c ← c + n DIV p1
        p1 ← p1 * p2
    EndWhile
    return c
EndAlgorithm
\`\`\`
Precizați care dintre următoarele afirmații sunt adevărate:`,
        options: [
            "Dacă cei trei parametri au valori egale (n = p1 = p2), atunci algoritmul returnează întotdeauna valoarea 1.",
            "Dacă p1 = 5 și p2 = 5, algoritmul returnează numărul de cifre de 0 pe care le are n! la sfârșit.",
            "Dacă p1 și p2 au valori egale și mai mari decât 2, atunci algoritmul returnează [logp1 n].",
            "Niciuna dintre celelalte trei afirmații nu este adevărată."
        ],
        answer: 2
    },
    {
        id: 30,
        question: `Care dintre următorii algoritmi returnează numărul de numere sumative din intervalul [a, b] (0 < a < b < 10^6)? Un număr natural nenul n este sumativ dacă n² se poate scrie ca sumă a n numere naturale nenule consecutive. De exemplu, 1 și 7 sunt sumative deoarece 1 = 1, respectiv 49 = 4 + 5 + 6 + 7 + 8 + 9 + 10.
\`\`\`
Algorithm sumative(a, b):
    k ← 0
    For i ← a, b execute
        If i MOD 2 ≠ 0 then
            k ← k + 1
        EndIf
    EndFor
    return k
EndAlgorithm

Algorithm sumative(a, b):
    k ← 0
    For i ← a, b execute
        i² ← i * i
        For j ← 2, i DIV 2 execute
            If i² = j * i + (i * (i + 1) DIV 2) then
                k ← k + 1
            EndIf
        EndFor
    EndFor
    return k
EndAlgorithm

Algorithm sumative(a, b):
    k ← 0
    For i ← a, b execute
        i² ← i * i
        For j ← 2, i – 1 execute
            If i² = j * i + (i * (i + 1) DIV 2) then
                k ← k + 1
            EndIf
        EndFor
    EndFor
    return k
EndAlgorithm

Algorithm sumative(a, b):
    return (b - a) DIV 2 + (b - a) MOD 2 + (a MOD 2 + b MOD 2) DIV 2
EndAlgorithm
\`\`\`
`,
        options: [
            "Algorithm sumative(a, b) varianta 1",
            "Algorithm sumative(a, b) varianta 2",
            "Algorithm sumative(a, b) varianta 3",
            "Algorithm sumative(a, b) varianta 4"
        ],
        answer: 3
    },
];

module.exports.answers = [1, 0, 0, 2, 3, 0, 3, 0, 2, 0, 1, 3, 1, 0, 1, 1, 2, 3, 0, 2, 0, 2, 3, 2, 1, 0, 3, 0, 1, 3];
