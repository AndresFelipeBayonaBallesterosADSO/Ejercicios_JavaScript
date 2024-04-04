function eliminarVocales(cadena) {
    // Usar una expresión regular para encontrar vocales en la cadena y reemplazarlas con una cadena vacía
    return cadena.replace(/[aeiouAEIOU]/g, '');
}
let cadenaOriginal = "Hola Mundo";
let cadenaSinVocales = eliminarVocales(cadenaOriginal);
console.log(`Cadena original: ${cadenaOriginal}`);
console.log(`Cadena sin vocales: ${cadenaSinVocales}`);
