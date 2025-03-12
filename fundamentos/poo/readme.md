# Preguntas recurrentes de Programación Orientada a Objetos

## Índice
1. [¿Cuál es la diferencia entre Programación estructurada y programación orientada a objetos?](#1)
2. [¿Qué es la Programación Orientada a Objetos?](#2)
3. [¿Por qué usar OOP?](#3)
4. [¿Cuáles son las principales características de los OOP?](#4)
5. [¿Qué es un objeto?](#5)
6. [¿Qué es una clase?](#6)
7. [¿Cuál es la diferencia entre una clase y una estructura?](#7)
8. [¿Puede llamar al método de la clase base sin crear una instancia?](#8)
9. [¿Cuál es la diferencia entre una clase y un objeto?](#9)
10. [¿Qué es la herencia?](#10)
11. [¿Cuáles son los diferentes tipos de herencia?](#11)
12. [¿Cuál es la diferencia entre herencia múltiple y multinivel?](#12)
13. [¿Qué es la herencia híbrida?](#13)
14. [¿Qué es la herencia jerárquica?](#14)
15. [¿Cuáles son las limitaciones de la herencia?](#15)
16. [¿Qué es una superclase?](#16)
17. [¿Qué es una subclase?](#17)
18. [¿Qué es el polimorfismo?](#18)
19. [¿Qué es el polimorfismo estático?](#19)
20. [¿Qué es el polimorfismo dinámico?](#20)
21. [¿Qué es la sobrecarga de métodos?](#21)
22. [¿Qué es la anulación de métodos?](#22)
23. [¿Qué es la sobrecarga de operadores?](#23)
24. [Diferenciar entre sobrecarga y anulación.](#24)
25. [¿Qué es la encapsulación?](#25)
26. [¿Qué son los 'especificadores de acceso'?](#26)
27. [¿Qué es la abstracción de datos?](#27)
28. [¿Cómo se logra la abstracción de datos?](#28)
29. [¿Qué es una clase abstracta?](#29)
30. [¿Puedes crear una instancia de una clase abstracta?](#30)
31. [¿Qué es una interfaz?](#31)
32. [Diferenciar entre abstracción y encapsulación de datos.](#32)
33. [¿Qué son las funciones virtuales?](#33)
34. [¿Qué son las funciones virtuales puras?](#34)
35. [¿Qué es un constructor?](#35)
36. [¿Qué es un destructor?](#36)
37. [Tipos de constructores](#37)
38. [¿Qué es un constructor de copias?](#38)

---

## 1. ¿Cuál es la diferencia entre Programación estructurada y programación orientada a objetos?
La programación estructurada se basa en procedimientos y funciones, mientras que la programación orientada a objetos (OOP) organiza el código en clases y objetos.

Ejemplo en programación estructurada (JavaScript):
```js
function calcularArea(base, altura) {
    return base * altura;
}
console.log(calcularArea(5, 10));
```

Ejemplo en OOP:
```js
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
const rect = new Rectangulo(5, 10);
console.log(rect.calcularArea());
```

## 2. ¿Qué es la Programación Orientada a Objetos?
Es un paradigma de programación basado en la creación y manipulación de objetos, donde cada objeto tiene propiedades y comportamientos.

## 3. ¿Por qué usar OOP?
Facilita la reutilización de código, mejora la organización y escalabilidad, y permite modelar problemas del mundo real de manera más intuitiva.

## 4. ¿Cuáles son las principales características de los OOP?
- **Encapsulación**: Agrupa datos y métodos.
- **Abstracción**: Oculta detalles innecesarios.
- **Herencia**: Permite reutilizar código de clases base.
- **Polimorfismo**: Un mismo método puede tener diferentes comportamientos.

## 5. ¿Qué es un objeto?
Es una instancia de una clase que contiene propiedades y métodos.

Ejemplo:
```js
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar() {
        console.log("El auto ha arrancado");
    }
};
auto.arrancar();
```

## 6. ¿Qué es una clase?
Es una plantilla para crear objetos.

Ejemplo:
```js
class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar() {
        console.log("El auto ha arrancado");
    }
}
const miAuto = new Auto("Toyota", "Corolla");
miAuto.arrancar();
```
