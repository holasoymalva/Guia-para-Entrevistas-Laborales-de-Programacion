/*
DOS SUMAS

Dada una matriz de enteros nums y 
un entero target, regreso índices 
de los dos números de modo que se 
sumen a target.
Puede suponer que cada entrada tendría
exactamente una solución, y no puedes 
usar el mismo elemento dos veces.

Puede devolver la respuesta en cualquier orden.

Entrada: 
números = [ 2,7,11,15 ], objetivo = 9

Salida: [ 0,1 ]

Explicación: 
Debido a los 
números [ 0 ] + números [ 1 ] = = 9, 
devolvemos [ 0, 1 ].

*/



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

let numeros = [ 2,7,11,15 ]
let objetivo = 9

console.log(twoSum(numeros, objetivo));
