# 🧠 Desafíos de Lógica, Algoritmos y Estructuras de Datos

Bienvenido a la sección de **Pruebas Técnicas** enfocada en resolver problemas de lógica y algoritmos. Aquí encontrarás ejercicios típicos de entrevistas para practicar habilidades fundamentales de programación, mejorar tu razonamiento y prepararte para pruebas en vivo.

---

## 🎯 ¿Qué vas a encontrar aquí?

- Enunciados claros y concisos.
- Restricciones y objetivos definidos.
- Soluciones explicadas paso a paso.
- Código de ejemplo en JavaScript (puedes adaptar a tu lenguaje favorito).

💡 **Recomendación**: Intenta resolver cada desafío por tu cuenta antes de mirar la solución.

---

## 📌 Índice de Desafíos

1. [✅ Subcadena más larga sin caracteres repetidos](#1)
2. [✅ FizzBuzz con condiciones personalizadas](#2)
3. [✅ Verificar si una cadena es palíndromo](#3)
4. [✅ Determinar si dos strings son anagramas](#4)
5. [✅ Encontrar el número que se repite una sola vez](#5)
6. [✅ Validar paréntesis balanceados](#6)
7. [✅ Búsqueda binaria en array ordenado](#7)
8. [✅ Factorial recursivo vs iterativo](#8)

---

## 1. Subcadena más larga sin caracteres repetidos <a name="1"></a>

### 🔹 Enunciado
Dado un string, encuentra la longitud de la subcadena más larga que no contiene caracteres repetidos.

**Ejemplo**:
```js
Entrada: "abcabcbb"
Salida: 3 // "abc"
````

### 🔹 Explicación paso a paso

1. Usa un puntero izquierdo y derecho para delimitar la ventana.
2. Utiliza un `Set` para registrar caracteres únicos en la ventana.
3. Si hay repetidos, mueve el puntero izquierdo y elimina del set.
4. Guarda el tamaño máximo en cada iteración.

---

## 2. FizzBuzz con condiciones personalizadas <a name="2"></a>

### 🔹 Enunciado

Imprime los números del 1 al 100. Para múltiplos de 3, imprime "Fizz", para múltiplos de 5 "Buzz", y para ambos "FizzBuzz".

**Salida esperada (fragmento)**:

```
1, 2, Fizz, 4, Buzz, Fizz, 7, ...
```

### 🔹 Explicación paso a paso

1. Usa un bucle de 1 a 100.
2. Condicionales:

   * `n % 3 === 0 && n % 5 === 0` → "FizzBuzz"
   * `n % 3 === 0` → "Fizz"
   * `n % 5 === 0` → "Buzz"
   * else → número

---

## 3. Verificar si una cadena es palíndromo <a name="3"></a>

### 🔹 Enunciado

Escribe una función que determine si una palabra o frase es un palíndromo (se lee igual al derecho que al revés).

**Ejemplo**:

```js
Entrada: "anita lava la tina"
Salida: true
```

### 🔹 Explicación paso a paso

1. Elimina espacios y convierte a minúsculas.
2. Compara la cadena con su reversa.

---

## 4. Determinar si dos strings son anagramas <a name="4"></a>

### 🔹 Enunciado

Dado dos strings, determinar si son anagramas (mismos caracteres, diferente orden).

**Ejemplo**:

```js
Entrada: "listen", "silent"
Salida: true
```

### 🔹 Explicación paso a paso

1. Quita espacios y ordena ambas cadenas.
2. Compara si son idénticas.

---

## 5. Encontrar el número que se repite una sola vez <a name="5"></a>

### 🔹 Enunciado

Dado un array donde todos los elementos se repiten dos veces excepto uno, encuentra ese número.

**Ejemplo**:

```js
Entrada: [4, 1, 2, 1, 2]
Salida: 4
```

### 🔹 Explicación paso a paso

1. Usa XOR (`^`) para cancelar duplicados.
2. Resultado final será el número único.

---

## 6. Validar paréntesis balanceados <a name="6"></a>

### 🔹 Enunciado

Verifica si una cadena de paréntesis está correctamente balanceada.

**Ejemplo**:

```js
Entrada: "({[]})"
Salida: true
```

### 🔹 Explicación paso a paso

1. Usa una pila.
2. Por cada apertura, apila.
3. Por cada cierre, compara con el tope.

---

## 7. Búsqueda binaria en array ordenado <a name="7"></a>

### 🔹 Enunciado

Dado un array ordenado y un número objetivo, devuelve su índice o -1 si no existe.

**Ejemplo**:

```js
Entrada: [1, 3, 5, 7, 9], objetivo: 5
Salida: 2
```

### 🔹 Explicación paso a paso

1. Usa punteros `inicio` y `fin`.
2. Calcula punto medio.
3. Reajusta el rango según el valor buscado.

---

## 8. Factorial recursivo vs iterativo <a name="8"></a>

### 🔹 Enunciado

Implementa una función que calcule el factorial de un número de forma:

* Recursiva
* Iterativa

**Ejemplo**:

```js
Entrada: 5
Salida: 120
```

### 🔹 Explicación paso a paso

* Recursivo: `n * factorial(n - 1)`
* Iterativo: usar bucle acumulativo

---

## 📌 ¿Cómo practicar?

1. Elige un problema del índice.
2. Lee el enunciado sin mirar la solución.
3. Intenta resolverlo por tu cuenta.
4. Revisa la solución paso a paso.
5. Refactorea y optimiza tu código si es necesario.

✅ Puedes adaptar el código a otros lenguajes como Python, Java, C++, etc.

---

## 🚀 Nivel de Dificultad (sugerido)

| Desafío | Nivel         |
| ------- | ------------- |
| 1-5     | 🟢 Básico     |
| 6-8     | 🟡 Intermedio |

---

## 🛠️ Próximamente

* Nuevos ejercicios por categorías: recursión, sorting, grafos, etc.
* Soluciones en múltiples lenguajes.
* Simulador de entrevistas técnicas.

---

<p align="center">Hecho con 💻 por <a href="https://holasoymalva.com">@holasoymalva</a></p>
