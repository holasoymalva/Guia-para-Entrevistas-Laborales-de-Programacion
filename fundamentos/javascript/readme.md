# 🚀 JavaScript Fundamentals

Esta guía **desbloqueará tu dominio de JavaScript** en entrevistas técnicas y el desarrollo de aplicaciones modernas.  
Aprenderás desde los fundamentos hasta preguntas avanzadas utilizadas por empresas como **Google, Netflix, Uber y Meta**.

---

## 📌 **Índice**
1. [🔹 ¿Qué es JavaScript y para qué se usa?](#qué-es-javascript-y-para-qué-se-usa)
2. [🔹 Tipos de datos en JavaScript](#tipos-de-datos-en-javascript)
3. [🔹 Diferencias entre `==` y `===`](#diferencias-entre--y-)
4. [🔹 Hoisting en JavaScript](#hoisting-en-javascript)
5. [🔹 ¿Qué es una Closure y cómo funciona?](#qué-es-una-closure-y-cómo-funciona)
6. [🔹 Callbacks vs Promises vs Async/Await](#callbacks-vs-promises-vs-asyncawait)
7. [🔹 ¿Qué es el Event Loop en JavaScript?](#qué-es-el-event-loop-en-javascript)
8. [🔹 Diferencias entre `var`, `let` y `const`](#diferencias-entre-var-let-y-const)
9. [🔹 ¿Qué es `this` en JavaScript?](#qué-es-this-en-javascript)
10. [📚 Recursos adicionales](#recursos-adicionales)

---

## 🔹 ¿Qué es JavaScript y para qué se usa?
**JavaScript (JS)** es un lenguaje de programación de alto nivel, interpretado y orientado a eventos. Se utiliza principalmente para desarrollo web, pero también en **backend (Node.js)**, **mobile (React Native)** y **machine learning (TensorFlow.js)**.

🔥 **Ejemplo de un "Hola Mundo" en JavaScript:**
```js
console.log("¡Hola, JavaScript!");
```

---

## 🔹 Tipos de datos en JavaScript
JavaScript tiene **7 tipos de datos primitivos** y **tipos estructurales**:

| Tipo de dato | Ejemplo |
|-------------|---------|
| `String` | `"Hola, mundo"` |
| `Number` | `42`, `3.14` |
| `Boolean` | `true`, `false` |
| `Undefined` | `let x;` (`x` es `undefined`) |
| `Null` | `let y = null;` |
| `Symbol` | `const sym = Symbol("id");` |
| `BigInt` | `const big = 12345678901234567890n;` |

🔥 **Ejemplo de conversión de tipos (Type Coercion):**
```js
console.log(5 + "5"); // "55" (Number se convierte en String)
console.log(5 - "2"); // 3 (String se convierte en Number)
```

---

## 🔹 Diferencias entre `==` y `===`
| Operador | Comparación | Ejemplo | Resultado |
|----------|------------|---------|----------|
| `==` | Compara valores (coerción de tipo) | `5 == "5"` | `true` |
| `===` | Compara valores y tipos | `5 === "5"` | `false` |

🔥 **Ejemplo:**
```js
console.log(0 == false);  // true (coerción)
console.log(0 === false); // false (sin coerción)
```

---

## 🔹 Hoisting en JavaScript
El **Hoisting** es un mecanismo por el cual las declaraciones de variables y funciones se mueven al inicio del contexto antes de ejecutar el código.

🔥 **Ejemplo de Hoisting:**
```js
console.log(nombre); // undefined
var nombre = "JavaScript";
```
⚠️ **Cuidado**: `let` y `const` también son "hoisted", pero no inicializados.
```js
console.log(x); // ReferenceError
let x = 10;
```

---

## 🔹 ¿Qué es una Closure y cómo funciona?
Una **Closure** es una función que recuerda el contexto donde fue creada, incluso después de ejecutarse.

🔥 **Ejemplo de Closure:**
```js
function contador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
```
💡 **Uso práctico:** Patrones como **memoization**, **módulos privados**, etc.

---

## 🔹 Callbacks vs Promises vs Async/Await
### **Callbacks**
Son funciones que se pasan como argumento a otras funciones.
```js
function fetchData(callback) {
  setTimeout(() => callback("Datos recibidos"), 2000);
}
fetchData(console.log);
```
**Problema:** Callback Hell (anidación excesiva).

### **Promises**
Manejan asincronía de manera más limpia.
```js
const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Datos"), 2000));
fetchData().then(console.log);
```

### **Async/Await**
La forma más moderna y limpia de manejar asincronía.
```js
async function getData() {
  let data = await fetchData();
  console.log(data);
}
getData();
```

---

## 🔹 ¿Qué es el Event Loop en JavaScript?
El **Event Loop** es el mecanismo que permite que JavaScript sea **single-threaded** y maneje tareas asíncronas sin bloquear el hilo principal.

🔥 **Ejemplo de ejecución del Event Loop:**
```js
console.log("Inicio");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("Fin");
```
**Salida esperada:**
```
Inicio
Fin
Promise
Timeout
```
💡 **Promesas se ejecutan antes que `setTimeout()` debido a la Microtask Queue.**

---

## 🔹 Diferencias entre `var`, `let` y `const`
| Declaración | Ámbito | Hoisting | Reasignable |
|------------|--------|---------|------------|
| `var` | Función | Sí, inicializado como `undefined` | Sí |
| `let` | Bloque | Sí, pero sin inicialización | Sí |
| `const` | Bloque | Sí, pero sin inicialización | No |

🔥 **Ejemplo:**
```js
var a = 10;
if (true) {
  let b = 20;
  const c = 30;
}
console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

---

## 🔹 ¿Qué es `this` en JavaScript?
El valor de `this` depende del **contexto de ejecución**.

🔥 **Ejemplo de `this` en diferentes contextos:**
```js
console.log(this); // Window (en navegador)
```
```js
const obj = {
  nombre: "JS",
  saludo: function() { console.log(this.nombre); }
};
obj.saludo(); // "JS"
```
**Arrow functions** no tienen su propio `this`:
```js
const arrow = () => console.log(this);
arrow(); // Window (o global en Node.js)
```

---

## 📚 **Recursos Adicionales**
📖 **Documentación Oficial**:  
- [MDN JavaScript Docs](https://developer.mozilla.org/es/docs/Web/JavaScript)  
- [JavaScript.info](https://javascript.info/)  

🎥 **Videos Recomendados**:  
- [JavaScript Crash Course - Traversy Media](https://youtu.be/hdI2bqOjy3c)  
- [Event Loop Explained - Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  

🔗 **Cursos Recomendados**:  
- [JavaScript: The Good Parts - Udemy](https://www.udemy.com/course/the-complete-javascript-course/)  

---

🎯 **Conclusión**  
JavaScript es un lenguaje versátil y poderoso. **Dominar estos conceptos te dará ventaja en entrevistas y proyectos reales.** 🚀
