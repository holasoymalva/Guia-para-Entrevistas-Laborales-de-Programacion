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


### Ejercicio 2 : dosSumas


Dada una matriz de enteros nums y un entero target, regreso índices de los dos números de modo que se sumen a target.
Puede suponer que cada entrada tendría exactamente una solución, y no puedes usar el mismo elemento dos veces.

Puede devolver la respuesta en cualquier orden.

Entrada: 
números = [ 2,7,11,15 ], objetivo = 9

Salida: [ 0,1 ]

Explicación: 
Debido a los 
números [ 0 ] + números [ 1 ] = = 9, 
devolvemos [ 0, 1 ].

``` javascript
const twoSum = function(nums, target) {
    let vals = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in vals) {
            return [vals[target-nums[i]], i];
        } else{
            vals[nums[i]]=i;
        }
        
    }
    return[];
};

``` 

Ejecutamos nuestras pruebas y podemos identificar que funciona de manera adecuada.

```javascript
let numeros = [ 2,7,11,15 ]
let objetivo = 9

console.log(twoSum(numeros, objetivo));
``` 

### Ejercicio 3 : Matriz de orden relativo

Dadas dos matrices arr1 y arr2, los elementos de arr2 son distintos y todos los elementos en arr2 también están en arr1.

Ordenar los elementos de arr1 de modo que el orden relativo de los artículos en arr1 son lo mismo que en arr2. Elementos que no aparecen en arr2 debe colocarse al final de arr1 en ascendente orden.

``` javascript
const twoSum = function(nums, target) {
    let vals = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in vals) {
            return [vals[target-nums[i]], i];
        } else{
            vals[nums[i]]=i;
        }
        
    }
    return[];
};

``` 


## Java

## Python

## React.js

## Node.js
