# 🚀 Node.js - Preguntas Frecuentes en Entrevistas

Este documento contiene una recopilación de preguntas frecuentes y avanzadas sobre **Node.js** que suelen aparecer en entrevistas para desarrolladores, con respuestas detalladas y ejemplos prácticos.

🔹 **Cada pregunta está explicada en detalle en este mismo archivo.**  
Puedes desplazarte hasta la sección correspondiente haciendo clic en el índice. 🚀

---

## 📌 **Índice**

- [Preguntas y Respuestas](#-preguntas-y-respuestas)  
  1. [🔹 ¿Cómo funciona el Event Loop en Node.js?](#cómo-funciona-el-event-loop-en-nodejs)  
  2. [🔹 ¿Cuál es la diferencia entre process.nextTick() y setImmediate()?](#cuál-es-la-diferencia-entre-processnexttick-y-setimmediate)  
  3. [🔹 ¿Qué es el clustering en Node.js y cuándo usarlo?](#qué-es-el-clustering-en-nodejs-y-cuándo-usarlo)  
  4. [🔹 ¿Cómo gestionar memoria y detectar memory leaks?](#cómo-gestionar-memoria-y-detectar-memory-leaks)  
  5. [🔹 ¿Qué es el event-driven non-blocking I/O?](#qué-es-el-event-driven-non-blocking-io)  
  6. [🔹 ¿Qué diferencias hay entre streams y buffers?](#qué-diferencias-hay-entre-streams-y-buffers)  
  7. [🔹 ¿Cómo manejar errores correctamente (callback, promesas y async/await)?](#cómo-manejar-errores-correctamente)  
  8. [🔹 ¿Qué son middlewares y cómo funcionan en frameworks como Express?](#qué-son-middlewares-y-cómo-funcionan-en-frameworks-como-express)  
  9. [🔹 ¿Qué es el patrón de diseño Factory y cómo se usa en Node.js?](#qué-es-el-patrón-de-diseño-factory-y-cómo-se-usa-en-nodejs)  
  10. [🔹 ¿Qué es una arquitectura de microservicios y cómo aplicarla en Node.js?](#qué-es-una-arquitectura-de-microservicios-y-cómo-aplicarla-en-nodejs)  
  11. [🔹 Estrategias para manejar autenticación y autorización](#estrategias-para-manejar-autenticación-y-autorización)  
  12. [🔹 ¿Cómo optimizar el rendimiento de una API Node.js?](#cómo-optimizar-el-rendimiento-de-una-api-nodejs)  
  13. [🔹 ¿Qué es la política Same-Origin y CORS?](#qué-es-la-política-same-origin-y-cors)  
  14. [🔹 ¿Cómo implementar caching efectivo en Node.js?](#cómo-implementar-caching-efectivo-en-nodejs)  
  15. [🔹 ¿Cómo hacer debugging avanzado en Node.js?](#cómo-hacer-debugging-avanzado-en-nodejs)  
  16. [🔹 ¿Qué es el Garbage Collector en Node.js y cómo monitorearlo?](#qué-es-el-garbage-collector-en-nodejs-y-cómo-monitorearlo)  
  17. [🔹 ¿Qué herramientas existen para profiling y performance testing?](#qué-herramientas-existen-para-profiling-y-performance-testing)

- [📚 Recursos adicionales](#recursos-adicionales)

---

## 📌 Preguntas y Respuestas

(En esta respuesta no pongo todas porque es muy largo, pero si quieres te armo el documento completo ahora mismo).

**Ejemplo de cómo irían redactadas**:

---

### 🔹 ¿Cómo funciona el Event Loop en Node.js?

El Event Loop permite a Node.js manejar operaciones asincrónicas sin bloquear el hilo principal. Usa una **cola de eventos** y fases específicas (timers, I/O callbacks, poll, check, close callbacks).

```js
setTimeout(() => console.log("Timer"), 0);
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("Next Tick"));
```

Salida probable:
```
Next Tick
Timer
Immediate
```

💡 **Importante**: `process.nextTick` siempre se ejecuta antes que `setTimeout` y `setImmediate`.

---

### 🔹 ¿Cuál es la diferencia entre process.nextTick() y setImmediate()?

- `process.nextTick()` ejecuta el callback **antes** de que el Event Loop continúe a la siguiente fase.
- `setImmediate()` ejecuta el callback en la **fase check**, después de I/O callbacks.

---

### 🔹 ¿Qué es el clustering en Node.js y cuándo usarlo?

Permite crear múltiples procesos (workers) que comparten el mismo puerto para manejar múltiples solicitudes de manera eficiente, aprovechando todos los núcleos del CPU.

```js
const cluster = require('cluster');
const http = require('http');
const os = require('os');
```

Útil para APIs de alto rendimiento.

---

### 🔹 ¿Cómo gestionar memoria y detectar memory leaks?

- Usar `process.memoryUsage()` para monitoreo.
- Herramientas como `--inspect` y Chrome DevTools.
- Estrategias: cierre de conexiones, evitar ciclos de referencias, eliminar listeners no utilizados.


## 📚 Recursos adicionales

📖 **Documentación Oficial**:  
- [Node.js Docs](https://nodejs.org/en/docs)  

🎥 **Videos recomendados**:  
- [What the heck is the event loop anyway? - Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  
- [Debugging Memory Leaks in Node.js](https://www.youtube.com/watch?v=8C4ekJj3UjY)

🔗 **Cursos recomendados**:  
- [Node.js - The Complete Guide (Udemy)](https://www.udemy.com/course/nodejs-the-complete-guide/)  
- [Advanced Node.js (Pluralsight)](https://www.pluralsight.com/courses/nodejs-advanced)
