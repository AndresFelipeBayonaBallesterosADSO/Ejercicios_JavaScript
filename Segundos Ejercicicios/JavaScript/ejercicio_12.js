function sumaEnBinario(a, b) {
    let suma = a + b;

    // Convertir la suma a binario y devolverla como una cadena
    return suma.toString(2);
}
let resultado = sumaEnBinario(5, 9);
console.log(`La suma en binario es: ${resultado}`);
