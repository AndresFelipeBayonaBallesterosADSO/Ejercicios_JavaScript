function inversoAditivo(numeros) {
    // Usar el método map para crear un nuevo arreglo con el inverso aditivo de cada número
    return numeros.map(numero => -numero);
}
let numeros = [1, -2, 3, -4, 5, -6];
let inversos = inversoAditivo(numeros);
console.log(`Números originales: ${numeros}`);
console.log(`Inversos aditivos: ${inversos}`);
