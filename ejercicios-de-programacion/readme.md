# Ejercicios de entrevistas laborales



## Javascript

### Ejercicio 1

Crear una función que determine si un número es primo o no y explicar cómo funciona.

En primer lugar, se comprueba si el número es menor o igual a 1, y si es así se devuelve falso ya que los números menores o iguales a 1 no son primos. 
En caso contrario, se utiliza un bucle "for" para recorrer desde el 2 hasta el número anterior al propio, comprobando en cada iteración si el número es divisible 
entre alguno de estos números. Si se encuentra alguna división exacta, se devuelve falso ya que el número no es primo. 
Si no se encuentra ninguna división exacta, se devuelve verdadero ya que el número es primo.


``` javascript
function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
``` 

Ejecutamos nuestras pruebas y podemos identificar que funciona de manera adecuada.


``` javascript
console.log(esPrimo(2)); // true
console.log(esPrimo(5)); // true
console.log(esPrimo(9)); // false
console.log(esPrimo(15)); // false
console.log(esPrimo(23)); // true
```

## Java

## Python

## React.js

## Node.js
