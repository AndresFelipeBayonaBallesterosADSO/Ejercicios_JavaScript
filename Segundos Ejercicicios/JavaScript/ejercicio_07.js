function encontrarMayorEnArreglo(arreglo) {
    if (arreglo.length === 0) {
        return "El arreglo está vacío.";
    }

    const mayor = Math.max(...arreglo);
    return mayor;
}

const numeros = [3, 5, 7, 1, 9, 2, 8];
const mayor = encontrarMayorEnArreglo(numeros);
console.log(`El número mayor en el arreglo es: ${mayor}`);
