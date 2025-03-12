# 🚀 JavaScript - Preguntas Frecuentes en Entrevistas  

Este documento contiene una recopilación de preguntas comunes sobre JavaScript en entrevistas técnicas, con respuestas detalladas y ejemplos prácticos.

---

## 📌 **Índice**
- [Preguntas y Respuestas](#-preguntas-y-respuestas)
1. [🔹 ¿Cuáles son los distintos tipos de datos en JavaScript?](#tipos-de-datos-en-javascript)
2. [🔹 Diferencias entre `==` y `===`](#-cuál-es-la-diferencia-entre-los-operadores--y-)
3. [🔹 ¿Qué es la coerción implícita de tipos en JavaScript?](#-qué-es-la-coerción-implícita-de-tipos-en-javascript)
4. [🔹 Hoisting en JavaScript](#hoisting-en-javascript)
5. [🔹 ¿Qué es una Closure y cómo funciona?](#qué-es-una-closure-y-cómo-funciona)
6. [🔹 Callbacks vs Promises vs Async/Await](#callbacks-vs-promises-vs-asyncawait)
7. [🔹 ¿Qué es el Event Loop en JavaScript?](#qué-es-el-event-loop-en-javascript)
8. [🔹 Diferencias entre `var`, `let` y `const`](#diferencias-entre-var-let-y-const)
9. [🔹 ¿Qué es `this` en JavaScript?](#qué-es-this-en-javascript)
- [📚 Recursos adicionales](#recursos-adicionales)

---

## 📌 Preguntas y Respuestas

### 🔹 ¿Cuáles son los distintos tipos de datos en JavaScript?
JavaScript tiene **7 tipos de datos primitivos** y tipos estructurales:

| Tipo | Ejemplo |
|------|---------|
| `String` | `"Hola, mundo"` |
| `Number` | `42`, `3.14` |
| `Boolean` | `true`, `false` |
| `Undefined` | `let x;` |
| `Null` | `let y = null;` |
| `Symbol` | `const sym = Symbol("id");` |
| `BigInt` | `const big = 12345678901234567890n;` |

También existen tipos estructurales como **Objects, Arrays y Functions**.

---

### 🔹 ¿Cuál es la diferencia entre los operadores `==` y `===`?
| Operador | Comparación | Ejemplo | Resultado |
|----------|------------|---------|----------|
| `==` | Compara valores, permite conversión de tipos (coerción) | `5 == "5"` | `true` |
| `===` | Compara valores y tipos estrictamente | `5 === "5"` | `false` |

🔹 **Ejemplo:**
```js
console.log(0 == false);  // true (coerción)
console.log(0 === false); // false (sin coerción)
```

---

### 🔹 ¿Qué es la coerción implícita de tipos en JavaScript?
Es cuando JavaScript convierte automáticamente un tipo de dato en otro.

🔹 **Ejemplo de coerción:**
```js
console.log("5" + 5); // "55" (Number se convierte en String)
console.log("5" - 3); // 2 (String se convierte en Number)
```

---

### 🔹 ¿Es JavaScript un lenguaje de tipo estático o dinámico?
JavaScript es **dinámico**, lo que significa que las variables pueden cambiar de tipo en tiempo de ejecución.

```js
let x = "Hola"; // String
x = 10;         // Ahora es Number
```

---

### 🔹 ¿Qué es la propiedad `NaN` en JavaScript?
`NaN` (Not a Number) representa un valor que no es un número válido.

🔹 **Ejemplo:**
```js
console.log(0 / 0);       // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(isNaN("abc")); // true
```

---

### 🔹 ¿Qué es el paso por valor y el paso por referencia?
| Modo | Tipos de datos | ¿Se modifica el original? |
|------|---------------|--------------------------|
| **Paso por valor** | Primitivos (`String`, `Number`, etc.) | ❌ No |
| **Paso por referencia** | Objetos y Arrays | ✅ Sí |

🔹 **Ejemplo:**
```js
let a = 10;
let b = a; // Se copia el valor
b = 20;
console.log(a); // 10

let obj1 = { name: "Juan" };
let obj2 = obj1; // Ambas referencias apuntan al mismo objeto
obj2.name = "Pedro";
console.log(obj1.name); // "Pedro"
```

---

### 🔹 ¿Qué son las funciones de orden superior en JavaScript?
Son funciones que **reciben o retornan otra función**.

🔹 **Ejemplo:**
```js
function operacion(a, b, callback) {
  return callback(a, b);
}

const suma = (x, y) => x + y;
console.log(operacion(5, 3, suma)); // 8
```

---

### 🔹 Explica los métodos `call()`, `apply()` y `bind()`
Son métodos para cambiar el contexto de `this` en funciones.

| Método | Uso | Diferencia |
|--------|-----|-----------|
| `call()` | Ejecuta la función con `this` modificado y **parámetros separados** | `func.call(obj, arg1, arg2)` |
| `apply()` | Igual que `call()`, pero **parámetros en un array** | `func.apply(obj, [arg1, arg2])` |
| `bind()` | Devuelve una nueva función con `this` cambiado | `const newFunc = func.bind(obj)` |

🔹 **Ejemplo:**
```js
const persona = { nombre: "Carlos" };
function saludar() {
  console.log("Hola " + this.nombre);
}
saludar.call(persona); // "Hola Carlos"
```

---

### 🔹 ¿Qué es Currying en JavaScript?
Currying es una técnica donde una función recibe **uno a uno sus argumentos** en lugar de todos a la vez.

🔹 **Ejemplo:**
```js
const suma = a => b => a + b;
console.log(suma(3)(5)); // 8
```

---

### 🔹 ¿Qué son las Closures en JavaScript?
Una **Closure** es una función que mantiene acceso a las variables de su contexto incluso después de ejecutarse.

🔹 **Ejemplo:**
```js
function contador() {
  let count = 0;
  return () => count++;
}
const increment = contador();
console.log(increment()); // 1
console.log(increment()); // 2
```

---

### 🔹 Diferencias entre `var`, `let` y `const`
| Declaración | Ámbito | Hoisting | Reasignable |
|------------|--------|---------|------------|
| `var` | Función | Sí, como `undefined` | Sí |
| `let` | Bloque | Sí, pero no inicializado | Sí |
| `const` | Bloque | Sí, pero no inicializado | No |

---

### 🔹 ¿Para qué sirven las promesas en JavaScript?
Las **promesas** manejan operaciones asíncronas y evitan el "callback hell".

🔹 **Ejemplo:**
```js
const promesa = new Promise((resolve) => setTimeout(() => resolve("Completado"), 2000));
promesa.then(console.log);
```

---

### 🔹 ¿Qué son las clases en JavaScript?
Las clases son una forma de definir objetos en JavaScript usando `class`.

🔹 **Ejemplo:**
```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}
const juan = new Persona("Juan");
console.log(juan.saludar());
```

---

### 🔹 ¿Qué es la destrucción de objetos?
Es una forma de extraer valores de objetos o arrays.

🔹 **Ejemplo:**
```js
const usuario = { nombre: "Ana", edad: 25 };
const { nombre, edad } = usuario;
console.log(nombre, edad); // "Ana 25"
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

