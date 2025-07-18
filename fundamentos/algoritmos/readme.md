# 📚 Algoritmos y Estructuras de Datos - Preguntas Frecuentes en Entrevistas

Este documento recopila preguntas comunes sobre **algoritmos y estructuras de datos** que suelen aparecer en entrevistas técnicas. Incluye explicaciones, ejemplos prácticos y conceptos clave para ayudarte a resolver problemas con eficiencia y claridad.

🔹 **Todas las preguntas están respondidas directamente en este archivo.**  
Puedes navegar usando el índice para ir a las secciones que más te interesen.

---

## 📌 Índice

### Estructuras de Datos
1. [¿Qué es una estructura de datos?](#1)
2. [¿Qué es un array y cómo funciona?](#2)
3. [¿Qué es una pila (stack)?](#3)
4. [¿Qué es una cola (queue)?](#4)
5. [¿Qué es una lista enlazada (linked list)?](#5)
6. [¿Qué es una tabla hash?](#6)
7. [¿Qué es un árbol binario?](#7)
8. [¿Qué es un heap?](#8)
9. [¿Qué es un grafo?](#9)

### Algoritmos
10. [¿Qué es un algoritmo?](#10)
11. [¿Qué es la notación Big O y por qué es importante?](#11)
12. [¿Qué es la recursión?](#12)
13. [¿Cuál es la diferencia entre búsqueda lineal y búsqueda binaria?](#13)
14. [¿Qué es ordenamiento por burbuja (bubble sort)?](#14)
15. [¿Qué es quicksort y cómo funciona?](#15)
16. [¿Qué es el algoritmo de Dijkstra?](#16)
17. [¿Qué es el algoritmo de backtracking?](#17)
18. [¿Qué es programación dinámica?](#18)
19. [¿Qué es una búsqueda en anchura (BFS)?](#19)
20. [¿Qué es una búsqueda en profundidad (DFS)?](#20)

---

## Estructuras de Datos

### 1. ¿Qué es una estructura de datos? <a name="1"></a>
Es una forma de organizar y almacenar datos para que puedan ser usados de forma eficiente. Ejemplos: arrays, listas, árboles, grafos.

---

### 2. ¿Qué es un array y cómo funciona? <a name="2"></a>
Es una colección de elementos almacenados en posiciones contiguas de memoria. Permite acceso directo mediante índices.

```js
const arr = [10, 20, 30];
console.log(arr[1]); // 20
````

---

### 3. ¿Qué es una pila (stack)? <a name="3"></a>

Es una estructura LIFO (Last In, First Out). El último en entrar es el primero en salir.

```js
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
```

---

### 4. ¿Qué es una cola (queue)? <a name="4"></a>

Es una estructura FIFO (First In, First Out). El primero en entrar es el primero en salir.

```js
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()); // 1
```

---

### 5. ¿Qué es una lista enlazada (linked list)? <a name="5"></a>

Es una colección de nodos donde cada nodo apunta al siguiente. Ideal para inserciones/eliminaciones frecuentes.

```js
class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}
```

---

### 6. ¿Qué es una tabla hash? <a name="6"></a>

Permite almacenar pares clave-valor con acceso rápido. Usa funciones hash para indexar.

```js
const mapa = new Map();
mapa.set("clave", "valor");
console.log(mapa.get("clave")); // "valor"
```

---

### 7. ¿Qué es un árbol binario? <a name="7"></a>

Estructura jerárquica donde cada nodo tiene como máximo dos hijos. Base para árboles de búsqueda, heaps, etc.

---

### 8. ¿Qué es un heap? <a name="8"></a>

Es un árbol binario completo que mantiene una propiedad específica: en un **max heap**, cada padre ≥ hijos.

---

### 9. ¿Qué es un grafo? <a name="9"></a>

Conjunto de nodos conectados por aristas. Puede ser dirigido o no, ponderado o no.

---

## Algoritmos

### 10. ¿Qué es un algoritmo? <a name="10"></a>

Es una secuencia de pasos definidos para resolver un problema. Debe ser claro, finito y ejecutable.

---

### 11. ¿Qué es la notación Big O y por qué es importante? <a name="11"></a>

Describe la complejidad temporal o espacial de un algoritmo en función del tamaño de entrada.

| Notación | Descripción | Ejemplo           |
| -------- | ----------- | ----------------- |
| O(1)     | Constante   | Acceso a un array |
| O(n)     | Lineal      | Búsqueda lineal   |
| O(log n) | Logarítmica | Búsqueda binaria  |
| O(n²)    | Cuadrática  | Bubble sort       |

---

### 12. ¿Qué es la recursión? <a name="12"></a>

Es cuando una función se llama a sí misma para resolver subproblemas.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

---

### 13. ¿Cuál es la diferencia entre búsqueda lineal y búsqueda binaria? <a name="13"></a>

* **Lineal**: Recorre uno a uno los elementos (O(n)).
* **Binaria**: Divide el array ordenado a la mitad en cada paso (O(log n)).

---

### 14. ¿Qué es ordenamiento por burbuja (bubble sort)? <a name="14"></a>

Algoritmo simple que compara e intercambia elementos adyacentes repetidamente.

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  return arr;
}
```

---

### 15. ¿Qué es quicksort y cómo funciona? <a name="15"></a>

Algoritmo de ordenamiento basado en "divide y vencerás". Usa un pivote y separa elementos menores y mayores.

---

### 16. ¿Qué es el algoritmo de Dijkstra? <a name="16"></a>

Calcula el camino más corto desde un nodo a todos los demás en un grafo ponderado sin ciclos negativos.

---

### 17. ¿Qué es el algoritmo de backtracking? <a name="17"></a>

Prueba soluciones recursivamente y retrocede si no cumplen. Ejemplo: Sudoku, n-reinas.

---

### 18. ¿Qué es programación dinámica? <a name="18"></a>

Técnica que guarda resultados de subproblemas para no repetir cálculos. Ejemplo: Fibonacci con memoización.

---

### 19. ¿Qué es una búsqueda en anchura (BFS)? <a name="19"></a>

Explora los nodos nivel por nivel. Se implementa con una cola.

---

### 20. ¿Qué es una búsqueda en profundidad (DFS)? <a name="20"></a>

Explora lo más profundo posible antes de retroceder. Se implementa con una pila o recursión.

---

## 📚 Recursos Adicionales

* [Visualgo.net (visualizaciones)](https://visualgo.net/)
* [Leetcode](https://leetcode.com/)
* [GeeksforGeeks - Data Structures](https://www.geeksforgeeks.org/data-structures/)
* [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
* [CS50 - Harvard](https://cs50.harvard.edu/)

🎥 **Videos recomendados**:

* [Sorting Algorithms Animation (Timo Bingmann)](https://www.youtube.com/watch?v=ZZuD6iUe3Pc)
* [Dynamic Programming - FreeCodeCamp](https://www.youtube.com/watch?v=oBt53YbR9Kk)

---

<p align="center">Hecho con 🧠 por <a href="https://holasoymalva.com">@holasoymalva</a></p>
