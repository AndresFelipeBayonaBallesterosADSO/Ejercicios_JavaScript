function sumaDePositivos(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero > 0) {
            suma += numero;
        }
    }
    return suma;
}
let numeros = [3, -1, 5, 7, -4, -2, 6];
let suma = sumaDePositivos(numeros);
console.log(`La suma de los números positivos es: ${suma}`);
