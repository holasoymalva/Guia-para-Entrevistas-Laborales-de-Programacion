# Preguntas de Javascript que me han hecho en entrevistas laborales

## ¿Cómo funciona el evento bubbling en JavaScript?

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

## ¿Cómo funciona el hoisting en JavaScript?

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
sum(2,3);
function sum(a,b){
  return a+b;
}
```

En este caso, el hoisting eleva la declaración de la función sum al principio del bloque de código, lo que significa que el código se ejecuta como si fuera:

``` javascript
function sum(a,b){
  return a+b;
}
sum(2,3);
```

Y en este caso, JavaScript retorna 5 como resultado de la suma de 2+3.

Es importante tener en cuenta que el hoisting solo afecta a las declaraciones, no a las asignaciones. Por lo tanto, si una variable ya ha sido declarada previamente, su valor no será reasignado al principio del ámbito.

En conclusión, el hoisting es un mecanismo en JavaScript que eleva las declaraciones de variables y funciones al principio del ámbito en el que se encuentran, lo que puede afectar a nuestra lógica de programación.


## ¿Qué es un closure en JavaScript y cómo se utiliza?

## ¿Cómo manejas el alcance de las variables en JavaScript?

## ¿Qué es una promesa en JavaScript y cómo se utiliza?

## ¿Cómo funciona el sistema de módulos en JavaScript?

## ¿Qué es una arrow function en JavaScript y cómo se utiliza?

## ¿Cómo manejas errores en JavaScript y cómo te aseguras de que tu código sea resistente a fallos?
