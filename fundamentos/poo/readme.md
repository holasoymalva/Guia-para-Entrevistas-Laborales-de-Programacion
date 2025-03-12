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


## 7. ¿Cuál es la diferencia entre una clase y una estructura?
En JavaScript, no existen estructuras como en otros lenguajes (C, C++). Sin embargo, los objetos pueden actuar como estructuras.

```js
// Objeto en JavaScript (equivalente a una estructura en otros lenguajes)
const persona = {
    nombre: "Juan",
    edad: 30
};
console.log(persona.nombre);
```

## 8. ¿Puede llamar al método de la clase base sin crear una instancia?
Sí, si el método es estático.

```js
class Base {
    static mensaje() {
        console.log("Hola desde la clase base");
    }
}
Base.mensaje();
```

## 9. ¿Cuál es la diferencia entre una clase y un objeto?
- Una **clase** es un plano o plantilla para crear objetos.
- Un **objeto** es una instancia de una clase.

```js
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const persona1 = new Persona("Carlos"); // Objeto
console.log(persona1.nombre);
```

**10. ¿Qué es la herencia?**  
Es un mecanismo que permite crear nuevas clases basadas en clases existentes, reutilizando sus propiedades y métodos. En JavaScript, se utiliza la palabra clave `extends` para indicar que una clase hereda de otra.

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau, guau!");
  }
}

const perro = new Perro("Fido");
perro.hacerSonido(); // "Guau, guau!"
```

---

**11. ¿Cuáles son los diferentes tipos de herencia?**  
En la teoría de la Programación Orientada a Objetos se suelen mencionar:
- **Herencia simple**: Una clase hija hereda de una sola clase padre (lo común en JavaScript).
- **Herencia múltiple**: Una clase hereda de varias clases (no soportada de forma nativa en JavaScript).
- **Herencia multinivel**: Cuando una clase hereda de otra, que a su vez hereda de otra, y así sucesivamente.
- **Herencia jerárquica**: Una clase padre con múltiples clases hijas.
- **Herencia híbrida**: Combina más de un tipo de herencia (no se aplica directamente en JavaScript).

---

**12. ¿Cuál es la diferencia entre herencia múltiple y multinivel?**  
- **Herencia múltiple**: Una clase hija tiene más de una clase padre (no nativa en JS).  
- **Herencia multinivel**: Una clase hereda de otra, que a su vez hereda de otra, formando varios niveles.

```js
// Ejemplo (simulado) de herencia multinivel en JS
class SerVivo {
  respirar() {
    console.log("Respirando...");
  }
}

class Animal extends SerVivo {
  comer() {
    console.log("Comiendo...");
  }
}

class Perro extends Animal {
  ladrar() {
    console.log("Guau!");
  }
}
```

---

**13. ¿Qué es la herencia híbrida?**  
Es la combinación de más de un tipo de herencia (por ejemplo, jerárquica + multinivel). En lenguajes como C++ puede ser directa, pero en JavaScript se requiere usar patrones como *mixins* para simular comportamientos similares.

---

**14. ¿Qué es la herencia jerárquica?**  
Es cuando varias clases hijas heredan de una misma clase padre.

```js
class Dispositivo {
  encender() {
    console.log("Encendido.");
  }
}

class Telefono extends Dispositivo {
  llamar() {
    console.log("Llamando...");
  }
}

class Tablet extends Dispositivo {
  navegar() {
    console.log("Navegando por internet...");
  }
}
```

---

**15. ¿Cuáles son las limitaciones de la herencia?**  
- Puede aumentar la complejidad del código si se abusa de ella.  
- Aumenta el acoplamiento entre clases (si se cambia la clase padre, podría afectar a las hijas).  
- JavaScript solo soporta herencia simple (no múltiple).  
- Puede dificultar el mantenimiento en grandes jerarquías.

---

**16. ¿Qué es una superclase?**  
También llamada *clase base* o *clase padre*, es la clase de la cual se heredan propiedades y métodos.

```js
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
}
```

---

**17. ¿Qué es una subclase?**  
También llamada *clase hija* o *clase derivada*, es la que hereda de la superclase.

```js
class Auto extends Vehiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
}
```

---

**18. ¿Qué es el polimorfismo?**  
Es la capacidad de un método para comportarse de distintas formas según el contexto u objeto que lo invoque. En JavaScript se ve reflejado principalmente en la **anulación (overriding)** de métodos en subclases.

---

**19. ¿Qué es el polimorfismo estático?**  
En lenguajes como C++ o Java, se llama polimorfismo en tiempo de compilación y se logra mediante la **sobrecarga de métodos** (varias funciones con el mismo nombre y distinta firma). JavaScript no soporta de forma nativa la sobrecarga de métodos, pero se pueden simular con parámetros opcionales o con validaciones dentro de la misma función.

---

**20. ¿Qué es el polimorfismo dinámico?**  
Se da en tiempo de ejecución; por ejemplo, la **anulación de métodos** en subclases (method overriding). En JavaScript, si una subclase redefine un método de la superclase, al invocarlo en la instancia hija, se usa la versión redefinida.

---

**21. ¿Qué es la sobrecarga de métodos?**  
Es la capacidad de un lenguaje para permitir múltiples funciones con el mismo nombre y parámetros diferentes. JavaScript no la soporta de forma estricta, pero se puede emular:

```js
function sumar(a, b) {
  if (b === undefined) {
    return a + a;
  }
  return a + b;
}

console.log(sumar(5));    // 10 (simulando un overload de un parámetro)
console.log(sumar(5, 3)); // 8
```

---

**22. ¿Qué es la anulación de métodos?**  
Es cuando una subclase sobrescribe un método heredado de la superclase, cambiando su implementación.

```js
class Animal {
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("Miau");
  }
}

const gatito = new Gato();
gatito.hacerSonido(); // "Miau"
```

---

**23. ¿Qué es la sobrecarga de operadores?**  
Es la habilidad de redefinir el comportamiento de los operadores (+, -, etc.) para tipos personalizados. JavaScript no soporta sobrecarga de operadores de forma nativa (a diferencia de C++).

---

**24. Diferenciar entre sobrecarga y anulación.**  
- **Sobrecarga (Overloading)**: Mismo nombre, distinta firma (parámetros). Ocurre en tiempo de compilación en lenguajes que la soportan.  
- **Anulación (Overriding)**: Mismo nombre, misma firma, distinta implementación en la clase hija. Ocurre en tiempo de ejecución.

---

**25. ¿Qué es la encapsulación?**  
Consiste en agrupar datos (propiedades) y métodos dentro de una misma entidad (clase/objeto), controlando el acceso a esos datos. En JavaScript, se puede usar la convención de guiones bajos o campos privados (con `#`) para simular encapsulación.

```js
class Cuenta {
  #saldo = 0; // Propiedad privada

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  verSaldo() {
    console.log(`Saldo actual: ${this.#saldo}`);
  }
}

const miCuenta = new Cuenta();
miCuenta.depositar(100);
miCuenta.verSaldo(); // "Saldo actual: 100"
```

---

**26. ¿Qué son los 'especificadores de acceso'?**  
En lenguajes como C++/Java se usan `public`, `private`, `protected`. En JavaScript no existen formalmente, pero desde ECMAScript 2022 se pueden usar campos privados (`#campo`) para encapsular.

---

**27. ¿Qué es la abstracción de datos?**  
Es el proceso de exponer solo los detalles relevantes de un objeto y ocultar la complejidad interna. Se logra definiendo métodos públicos que interactúan con propiedades internas sin revelar su implementación.

---

**28. ¿Cómo se logra la abstracción de datos?**  
En lenguajes con clases abstractas o interfaces (TypeScript, Java, etc.), se definen métodos o firmas sin implementación, obligando a las subclases a implementarlos.  
En JavaScript “puro”, se puede simular usando métodos que ocultan detalles internos o con la convención de campos privados.

---

**29. ¿Qué es una clase abstracta?**  
Es una clase que no se puede instanciar directamente y que puede contener métodos sin implementar (abstractos). JavaScript no tiene clases abstractas de forma nativa, pero podemos forzar el comportamiento lanzando un error en el constructor:

```js
class Figura {
  constructor() {
    if (new.target === Figura) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
  }

  calcularArea() {
    throw new Error("Método abstracto");
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}
```

---

**30. ¿Puedes crear una instancia de una clase abstracta?**  
No, por definición no se puede (lanzaría un error si lo intentas). En JavaScript se emula, como se muestra en el ejemplo anterior.

---

**31. ¿Qué es una interfaz?**  
En muchos lenguajes (Java, C#), es un contrato que define métodos y propiedades sin implementación. JavaScript no tiene interfaces de forma nativa, pero se puede simular con convenciones o usar TypeScript para definirlas.

---

**32. Diferenciar entre abstracción y encapsulación de datos.**  
- **Abstracción**: Mostrar solo lo necesario y ocultar la complejidad interna.  
- **Encapsulación**: Proteger y agrupar datos y métodos para evitar acceso inadecuado o modificaciones directas.

---

**33. ¿Qué son las funciones virtuales?**  
En lenguajes como C++, son métodos cuyo comportamiento se determina en tiempo de ejecución, permitiendo anularse en subclases (similar a “overriding” en JavaScript). En JS, todos los métodos son virtuales de forma natural, porque la búsqueda del método ocurre en tiempo de ejecución.

---

**34. ¿Qué son las funciones virtuales puras?**  
En C++ se declara una función virtual como “pura” (`= 0`), lo que obliga a las clases derivadas a implementarla. JavaScript no tiene este concepto, pero puede emularse con lanzamientos de error (ver clase abstracta).

---

**35. ¿Qué es un constructor?**  
Es un método especial que se ejecuta al crear una instancia de una clase, inicializando sus propiedades.

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

---

**36. ¿Qué es un destructor?**  
En lenguajes con administración manual de memoria (C++), es un método que se ejecuta cuando un objeto se elimina. JavaScript no tiene destructores, pues usa *garbage collection*. Se puede simular cierta limpieza manual con patrones o *callbacks* si fuera necesario.

---

**37. Tipos de constructores**  
En lenguajes como C++/Java se habla de:
- **Constructor por defecto** (sin parámetros)  
- **Constructor parametrizado**  
- **Constructor de copia** (C++).  
En JavaScript, únicamente se define un método `constructor` (parametrizado, opcionalmente con valores por defecto).

---

**38. ¿Qué es un constructor de copias?**  
Es una forma especial de constructor (sobre todo en C++) que recibe un objeto de la misma clase y crea una copia. JavaScript no lo maneja de forma nativa; copiamos objetos con el operador spread (`{...obj}`) o `Object.assign`.

```js
const original = { nombre: "Alice" };
const copia = { ...original };
copia.nombre = "Bob";
console.log(original.nombre); // "Alice"
console.log(copia.nombre);    // "Bob"
```

---
