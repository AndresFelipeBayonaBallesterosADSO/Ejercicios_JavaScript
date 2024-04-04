function invertirCadena(cadena) {
    // Convertir la cadena en un arreglo de caracteres, invertir el arreglo, y luego unirlo de nuevo en una cadena
    const cadenaInvertida = cadena.split('').reverse().join('');
    return cadenaInvertida;
}

const cadenaOriginal = "Hola";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(`La cadena original es: ${cadenaOriginal}`);
console.log(`La cadena invertida es: ${cadenaInvertida}`);
