var average = function(salary) {
    // Val sera la variable donde acumularemos la suma de salarios
    let val = 0;
    // Aqui definiremos los valores maximos con los cuales contrastaremos
    // el resto de salarios.
    let max = -Infinity;
    let min = Infinity;
    // Agregamos un for obteniendo cada uno de los valores dentro del arreglo
    for(let el of salary){
        // Sumaremos el monto de los salarios en val
        val+=el; 
        // Obtendremos los valores Maximos y Minimos 
        max<el?max=el:max=max;
        min>el?min=el:min=min;
    }
    // para obtener el resultado restamos los valores minimo y maximo
    let result = val-(max+min);
    // Para finalmente dividirlo entre el numero de salarios removiendo el minimo y el maximo
    result = result/(salary.length-2);
    // Obteniendo finalmente nuestro resultado esperado.
    return result;
};

let input = [4000,3000,1000,2000];
let output = 2500;

let resultado = average(input);

// A continuacion agregamos un prueba para validar que el resultado tiene el valor esperado de salida

console.log(output == resultado); // True es la respuesta esperada, False el algoritmo tiene errores
