# 📖 Guía para Entrevistas Laborales de Programación  
<img src="./readme-assets/entrevista.png" alt="readme-title" width="100%"/>

Este repositorio es un recurso abierto para ayudarte a prepararte para entrevistas técnicas en programación. Aquí encontrarás teoría, ejemplos de código, pruebas técnicas, desafíos prácticos y simulacros de entrevistas.

🚀 **Objetivo**: Brindar una guía completa con preguntas comunes, resolución de problemas y simulacros para mejorar tus habilidades.

📌 **Índice**
1. [Fundamentos](#%EF%B8%8F-fundamentos)
2. [Stacks Tecnológicos](#stacks-tecnologicos)
3. [Pruebas Técnicas](#pruebas-tecnicas)
4. [Simulacros de Entrevistas](#simulacros-de-entrevistas)
5. [Cómo Contribuir](#como-contribuir)

---

## 🏗️ Fundamentos
Esta sección cubre conceptos esenciales en programación y herramientas clave.  
Cada tema contiene preguntas comunes, ejemplos de código y recursos adicionales.

📌 **Temas Incluidos**:
- **Git** → [Preguntas Frecuentes](fundamentos/git/preguntas.md) | [Ejemplos](fundamentos/git/ejemplos.md)  
- **HTML & CSS** → [Preguntas](fundamentos/html/preguntas.md) | [Ejemplos](fundamentos/css/ejemplos.md)  
- **JavaScript** → [Preguntas](fundamentos/javascript/preguntas.md) | [Ejemplos](fundamentos/javascript/ejemplos.md)  
- **POO (Programación Orientada a Objetos)** → [Preguntas](fundamentos/poo/preguntas.md) | [Ejemplos](fundamentos/poo/ejemplos.md)  

---

## 🚀 Stacks Tecnológicos
Exploramos preguntas y desafíos específicos para distintos stacks.

📌 **Stacks Incluidos**:
- [React](stacks/react) | [Angular](stacks/angular) | [Node.js](stacks/node)  
- [MEAN Stack](stacks/mean) | [MERN Stack](stacks/mern) | [Java Backend](stacks/java-backend)  

Cada stack tiene preguntas técnicas y ejercicios aplicados a entrevistas reales.

---

## 🧠 Pruebas Técnicas
La clave para superar entrevistas técnicas es la práctica constante. Aquí encontrarás desafíos y pruebas técnicas.

📌 **Tipos de Pruebas**:
- **Lógica y Algoritmos** → [Ejercicios](pruebas-tecnicas/desafios/logica) | [Soluciones](pruebas-tecnicas/soluciones)  
- **Estructuras de Datos** → [Ejercicios](pruebas-tecnicas/desafios/estructuras-de-datos)  
- **Desarrollo Frontend UI** → [Ejercicios](pruebas-tecnicas/desafios/frontend-ui)  

Ejemplo de un desafío:
```js
// Dado un string, encuentra la subcadena más larga sin caracteres repetidos
const longestSubstring = (s) => {
  let seen = new Set(), maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
console.log(longestSubstring("abcabcbb")); // Output: 3
```

---

## 🎭 Simulacros de Entrevistas
Prueba tus habilidades con entrevistas simuladas y escenarios reales.

📌 **Tipos de Simulacros**:
1. **Entrevistas de Algoritmos y Lógica**
2. **Entrevistas de Código en Varios Lenguajes**
3. **Casos Prácticos de Desarrollo**  
Accede a guías y ejemplos en la carpeta [Simulacros](simulacros/).

---

## 🤝 Cómo Contribuir
📌 Si deseas contribuir, sigue estos pasos:
1. **Clona el repositorio**  
   ```sh
   git clone https://github.com/holasoymalva/Guia-para-Entrevistas-Laborales-de-Programacion.git
   ```
2. **Crea una nueva rama**  
   ```sh
   git checkout -b mi-contribucion
   ```
3. **Realiza cambios y sube tus mejoras**
4. **Haz un Pull Request**

**¡Gracias por tu apoyo!** 💙

---

## 🏆 Autor
Creado por [Malvabombom](https://www.linkedin.com/in/martin-manriquez-899877177/).  
Sígueme en redes sociales:  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/martin-manriquez-899877177/)  
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/holasoymalva/)  
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=flat-square&logo=tiktok&logoColor=white)](https://www.tiktok.com/@holasoymalva/)
```

---

### **🛠 Mejoras Implementadas**
✅ **Estructura organizada** → Secciones: Fundamentos, Stacks, Pruebas, Simulacros.  
✅ **Ejemplos de código** → Cada tema tiene una sección de ejemplos en archivos separados.  
✅ **Explicaciones detalladas de pruebas** → Descripción clara de cada prueba con ejemplos y soluciones.  
✅ **Desafíos prácticos** → Carpeta `/pruebas-tecnicas/desafios/` con ejercicios por categorías.  
✅ **Simulacros de entrevistas** → Incluye escenarios de prueba en `/simulacros/`.  
✅ **Mejor presentación** → Índice claro, enlaces internos, código con formato y README visualmente atractivo.  
