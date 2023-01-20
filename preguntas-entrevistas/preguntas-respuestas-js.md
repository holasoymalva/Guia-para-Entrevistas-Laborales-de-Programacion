# Preguntas de Javascript que me han hecho en entrevistas laborales

## ¿Cómo funciona el evento bubbling en JavaScript?

En JavaScript, cuando un evento ocurre en un elemento HTML, este evento se propaga a través de los elementos padres hasta llegar al elemento raíz del documento. Este proceso se conoce como evento bubbling.

Por ejemplo, si tenemos un botón dentro de un div, y agregamos un evento click al botón, cuando el usuario haga clic en el botón, el evento se propagará al div y luego al elemento raíz del documento.

Esto significa que podemos agregar un evento a un elemento padre, y cuando el evento ocurra en un elemento hijo, todavía se activará el evento en el elemento padre. Esto es útil para evitar agregar eventos a cada elemento hijo individualmente.

Es importante tener en cuenta que también existe un proceso llamado evento capturing, el cual es el proceso opuesto al bubbling, este proceso se activa desde el elemento raíz hasta el elemento hijo.

En resumen, el evento bubbling es un proceso en el que un evento se propaga a través de los elementos padres hasta llegar al elemento raíz del documento. Esto permite agregar un evento a un elemento padre y que se active cuando el evento ocurre en un elemento hijo.

## ¿Cómo funciona el hoisting en JavaScript?

## ¿Qué es un closure en JavaScript y cómo se utiliza?

## ¿Cómo manejas el alcance de las variables en JavaScript?

## ¿Qué es una promesa en JavaScript y cómo se utiliza?

## ¿Cómo funciona el sistema de módulos en JavaScript?

## ¿Qué es una arrow function en JavaScript y cómo se utiliza?

## ¿Cómo manejas errores en JavaScript y cómo te aseguras de que tu código sea resistente a fallos?
