# Preguntas de entrevistas laborales

* [Preguntas de Javascript que me han hecho en entrevistas laborales](#preguntas-de-javascript-que-me-han-hecho-en-entrevistas-laborales)
* [Preguntas de Java que me han hecho en entrevistas laborales](#preguntas-de-java-que-te-podrían-hacer-en-entrevistas-laborales)
* Preguntas de Golang que me han hecho en entrevistas laborales
* Preguntas de Python que me han hecho en entrevistas laborales
* Preguntas de React que me han hecho en entrevistas laborales
* Preguntas de Angular que me han hecho en entrevistas laborales


# Preguntas de Javascript que me han hecho en entrevistas laborales

* ¿Cómo funciona el evento bubbling en JavaScript?
* ¿Cómo funciona el hoisting en JavaScript?
* ¿Qué es un closure en JavaScript y cómo se utiliza?
* ¿Cómo manejas el alcance de las variables en JavaScript?
* ¿Qué es una promesa en JavaScript y cómo se utiliza?
* ¿Cómo funciona el sistema de módulos en JavaScript?
* ¿Qué es una arrow function en JavaScript y cómo se utiliza?
* ¿Cómo manejas errores en JavaScript y cómo te aseguras de que tu código sea resistente a fallos?

### ¿Cómo funciona el evento bubbling en JavaScript?

En JavaScript, cuando un evento ocurre en un elemento HTML, este evento se propaga a través de los elementos padres hasta llegar al elemento raíz del documento. Este proceso se conoce como evento bubbling.

Por ejemplo, si tenemos un botón dentro de un div, y agregamos un evento click al botón, cuando el usuario haga clic en el botón, el evento se propagará al div y luego al elemento raíz del documento.

Esto significa que podemos agregar un evento a un elemento padre, y cuando el evento ocurra en un elemento hijo, todavía se activará el evento en el elemento padre. Esto es útil para evitar agregar eventos a cada elemento hijo individualmente.

Es importante tener en cuenta que también existe un proceso llamado evento capturing, el cual es el proceso opuesto al bubbling, este proceso se activa desde el elemento raíz hasta el elemento hijo.

En resumen, el evento bubbling es un proceso en el que un evento se propaga a través de los elementos padres hasta llegar al elemento raíz del documento. Esto permite agregar un evento a un elemento padre y que se active cuando el evento ocurre en un elemento hijo.

``` html
<body>
    <h2>Evento Bubbling en Javascript</h2>
  
    <div id="parent">
        <button>
            <h2>Parent</h2>
        </button>
        <button id="child">
  
            <p>Child</p>
  
        </button>
    </div><br>
  
  
    <script>
        document.getElementById(
        "child").addEventListener("click", function () {
            alert("You clicked the Child element!");
        }, false);
          
        document.getElementById(
        "parent").addEventListener("click", function () {
            alert("You clicked the parent element!");
        }, false);
    </script>
  
</body>
```

### ¿Cómo funciona el hoisting en JavaScript?

En JavaScript, el hoisting es un mecanismo que eleva las declaraciones de variables y funciones al principio del ámbito en el que se encuentran. Esto significa que, independientemente de dónde se declara una variable o función, su declaración se moverá al principio del ámbito.

Veamos un ejemplo:
``` javascript
console.log(x);
var x = 5;
```
En este caso, el hoisting eleva la declaración de la variable x al principio del bloque de código, lo que significa que el código se ejecuta como si fuera:

``` javascript
var x;
console.log(x);
x = 5;
```

Y en este caso, JavaScript retorna undefined, debido a que la variable x ha sido declarada pero no tiene un valor asignado.

Otro ejemplo, con las funciones

``` javascript
console.log(sum(2,3));
function sum(a,b){
  return a+b;
}
```

En este caso, el hoisting eleva la declaración de la función sum al principio del bloque de código, lo que significa que el código se ejecuta como si fuera:

``` javascript
function sum(a,b){
  return a+b;
}
console.log(sum(2,3));
```

Y en este caso, JavaScript retorna 5 como resultado de la suma de 2+3.

Es importante tener en cuenta que el hoisting solo afecta a las declaraciones, no a las asignaciones. Por lo tanto, si una variable ya ha sido declarada previamente, su valor no será reasignado al principio del ámbito.

En conclusión, el hoisting es un mecanismo en JavaScript que eleva las declaraciones de variables y funciones al principio del ámbito en el que se encuentran, lo que puede afectar a nuestra lógica de programación.


### ¿Qué es un closure en JavaScript y cómo se utiliza?

Un closure es una función que se crea dentro de otra función y tiene acceso a las variables y funciones de la función padre. Un closure es capaz de recordar el estado de las variables y funciones de la función padre, incluso después de que la función padre haya terminado de ejecutarse.

Veamos un ejemplo:

``` Javascript
function createCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```


En este ejemplo, la función createCounter crea una variable count con valor inicial de 0 y retorna una función anónima. La función retornada tiene acceso a la variable count y la retorna y la incrementa en cada llamada.
La variable counter guarda el resultado de la función createCounter y cada vez que se llama a la variable counter se retorna el valor actual de count y se incrementa.

Otro ejemplo puede ser el de una función que recibe un valor y retorna una función que recibe otro valor y retorna la suma de ambos valores:


``` Javascript
function sum(x) {
  return function(y) {
    return x + y;
  }
}
const add5 = sum(5);
console.log(add5(3)); // 8
console.log(add5(4)); // 9
```

Los closures son muy útiles para evitar global scope pollution, encapsulando variables y funciones dentro de funciones y permitiendo el acceso solo a través de las funciones retornadas. También se usan para crear funciones currying, y para implementar funciones de orden superior.

Los closures son una característica importante de JavaScript que permite el acceso a variables y funciones de la función padre, incluso después de que esta haya terminado de ejecutarse, permitiendo encapsulamiento y reuso de código.



### ¿Cómo manejas el alcance de las variables en JavaScript?

En JavaScript, existen dos tipos de alcance: el alcance global y el alcance de bloque.

Un ejemplo de alcance global es cuando declaras una variable fuera de cualquier función o bloque. Esta variable está disponible en todo el código y puede ser accedida o modificada desde cualquier lugar.

``` javascript
let globalVariable = "Soy una variable global";
console.log(globalVariable); // "Soy una variable global"
```

Por otro lado, un ejemplo de alcance de bloque es cuando declaras una variable dentro de un bloque de código, como una función o un bucle. Esta variable solo está disponible dentro del bloque y no puede ser accedida o modificada desde fuera del mismo.

``` javascript
if(true) {
  let localVariable = "Soy una variable local";
  console.log(localVariable); // "Soy una variable local"
}
console.log(localVariable); // ReferenceError: localVariable is not defined
```

### ¿Qué es una promesa en JavaScript y cómo se utiliza?

Las promesas son una forma de manejar la asincronía en JavaScript. Son objetos que representan un valor o un error que pueden estar disponibles en un futuro, y nos permitan manejar el resultado de una operación asíncrona de manera organizada y estructurada.

Una promesa se crea utilizando la función Promise y se le pasa como parámetro una función llamada "resolver". Dentro de esta función se debe escribir el código que se ejecutará de forma asíncrona, y cuando esta tarea termine, se debe llamar a la función resolve (si todo sale bien) o reject (si hay algún error).

``` javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Promesa cumplida"), 2000);
});
```

``` javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

En este ejemplo, utilizamos la función fetch, la cual retorna una promesa, y luego usamos los métodos then y catch para manejar la respuesta. El método then se ejecuta cuando la promesa se cumple y recibe como parámetro el valor que se ha resuelto, en este caso la respuesta de la petición HTTP. El método catch se ejecuta cuando hay algún error en la promesa.
  
En resumen, las promesas son una herramienta esencial para manejar la asincronía en JavaScript de manera organizada y estructurada. Es recomendable aprender a utilizarlas para mejorar la legibilidad y escalabilidad de tu código.


### ¿Cómo funciona el sistema de módulos en JavaScript?

### ¿Qué es una arrow function en JavaScript y cómo se utiliza?

### ¿Cómo manejas errores en JavaScript y cómo te aseguras de que tu código sea resistente a fallos?


# Preguntas de Java que te podrían hacer en entrevistas laborales


* ¿Puedes explicar cómo funciona el manejo de excepciones en Java?
* ¿Cómo funciona la sobrecarga de métodos en Java?
* ¿Qué es una interfaz en Java y cómo se utiliza?
* ¿Puedes explicar cómo funciona la herencia en Java?
* ¿Puedes dar un ejemplo de una clase abstracta en Java?
* ¿Qué es una colección en Java y puedes nombrar algunos de los tipos de colecciones disponibles?
* ¿Puedes explicar cómo funciona el polimorfismo en Java?
* ¿Puedes explicar cómo funciona el Garbage Collector en Java?
* ¿Puedes nombrar algunas de las características de la programación orientada a objetos en Java?
* ¿Puedes explicar cómo funciona el concepto de multithreading en Java?

### ¿Qué es la herencia en Java? 

La herencia es un mecanismo en Java que permite que una clase herede los atributos y métodos de otra clase. Esto significa que una clase puede heredar todo el comportamiento de otra clase y agregar su propio comportamiento adicional.

``` java
class Vehicle {
    int wheels;
    void move() {
        System.out.println("Moving on " + wheels + " wheels");
    }
}
class Car extends Vehicle {
    int doors;
    void honk() {
        System.out.println("Beep beep!");
    }
}
```

### ¿Qué es una interfaz en Java? 

Una interfaz es una especie de "contrato" que especifica los métodos que una clase debe implementar. Una interfaz no tiene cuerpo de método, sólo tiene la declaración de métodos.

``` java
interface Shape {
    void draw();
}
class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
```

### ¿Puedes explicar cómo funciona el manejo de excepciones en Java? 

El manejo de excepciones es un mecanismo en Java que nos permite detectar y manejar situaciones inesperadas en nuestro código. Esto incluye errores de sintaxis, errores de lógica, errores de entrada/salida, entre otros.
Java proporciona una jerarquía de excepciones para clasificar y manejar distintos tipos de excepciones.

``` java
try {
    // código que puede generar una excepción
} catch (ExceptionType e) {
    // código para manejar la excepción
}
```

### ¿Cómo funciona la sobrecarga de métodos en Java? 

La sobrecarga de métodos permite que una clase tenga varios métodos con el mismo nombre, pero con distintos parámetros. Esto nos permite crear métodos con distintas funcionalidades y usarlos según el contexto.


### ¿Puedes explicar cómo funciona el manejo de excepciones en Java?

### ¿Cómo funciona la sobrecarga de métodos en Java?

La sobrecarga de métodos es una técnica en la que una clase tiene varios métodos con el mismo nombre pero con diferentes parámetros. Esto permite que una clase tenga varias formas de realizar una misma acción, pero con diferentes opciones.

Por ejemplo, si queremos crear una clase para representar un rectángulo, podemos crear un método constructor con diferentes opciones para inicializar un rectángulo, como con un ancho y un alto, o con dos puntos que definen una esquina superior izquierda y una esquina inferior derecha.

``` java
class Rectangle {
    // Constructor con ancho y alto
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }
    
    // Constructor con dos puntos
    public Rectangle(Point topLeft, Point bottomRight) {
        this.width = bottomRight.x - topLeft.x;
        this.height = bottomRight.y - topLeft.y;
    }
}
```

De esta manera, podemos crear un rectángulo de diferentes maneras, según nuestras necesidades.

Además, también se puede sobrecargar métodos con diferentes tipos de datos, eso permite a los métodos tener diferentes comportamientos para diferentes tipos de datos.

En resumen, la sobrecarga de métodos es una técnica muy útil en Java para permitir que una clase tenga varias formas de realizar una misma acción, adaptándose mejor a las necesidades de nuestra aplicación.



### ¿Qué es una interfaz en Java y cómo se utiliza?
### ¿Puedes explicar cómo funciona la herencia en Java?
### ¿Puedes dar un ejemplo de una clase abstracta en Java?
### ¿Qué es una colección en Java y puedes nombrar algunos de los tipos de colecciones disponibles?
### ¿Puedes explicar cómo funciona el polimorfismo en Java?
### ¿Puedes explicar cómo funciona el Garbage Collector en Java?
### ¿Puedes nombrar algunas de las características de la programación orientada a objetos en Java?

### ¿Puedes explicar cómo funciona el concepto de multithreading en Java?

El multithreading es la capacidad de un sistema para manejar varios procesos o hilos de ejecución al mismo tiempo. Esto permite que una aplicación pueda realizar varias tareas de manera simultánea, mejorando su rendimiento y eficiencia.

Por ejemplo, si queremos crear una aplicación para descargar varios archivos de internet al mismo tiempo, podemos utilizar varios hilos de ejecución para descargar cada archivo de forma independiente.

``` java
public class Downloader {
    public void downloadFiles(List<String> urls) {
        for (String url : urls) {
            new Thread(() -> downloadFile(url)).start();
        }
    }
    
    private void downloadFile(String url) {
        // Descargar archivo
    }
}
```

En este ejemplo, utilizamos un bucle para crear un hilo de ejecución para cada url en la lista y llamamos al metodo start() para iniciar el hilo.



### ¿Cual es el uso del operador "::" en Java?

"::" es un operador de acceso de método en Java. Es utilizado para acceder a un método estático de una clase, también conocido como método de referencia de clase. Es similar al uso de "." para acceder a un método de instancia de un objeto.

Por ejemplo, si tienes una clase "Math" con un método estático "sqrt()" para calcular la raíz cuadrada de un número, podrías usar el operador "::" para acceder a ese método y pasarle un argumento:

``` java
double num = 9.0;
double result = Math.sqrt(num);
Otra forma de acceder al mismo metodo seria:
```

``` java
double num = 9.0;
double result = Math::sqrt.apply(num);
```

También se usa en las expresiones lambda, ya que se pueden usar para crear una referencia a un método estático o a un método de instancia. Por ejemplo, si quieres crear una expresión lambda para usar con un método que acepta una interfaz funcional, podrías usar el operador "::" para crear una referencia a un método existente:

``` java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(System.out::println);
```

En resumen, el operador "::" se usa para acceder a un método estático de una clase, y también se usa en las expresiones lambda para crear una referencia a un método existente.

Recuerda que estas son solo algunas de las preguntas que podrían hacerte, pero es importante estar preparado para responder preguntas específicas relacionadas con tus habilidades y experiencia en Java.
