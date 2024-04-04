function contarSilabas(palabra) {
    // Normalizar la palabra a minúsculas y quitar caracteres especiales
    palabra = palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Contar las vocales en la palabra como una aproximación básica del número de sílabas
    const coincidencias = palabra.match(/[aeiou]/gi);
    const numeroDeSilabas = coincidencias ? coincidencias.length : 0;

    console.log(`La palabra "${palabra}" tiene aproximadamente ${numeroDeSilabas} sílaba(s).`);

    return numeroDeSilabas;
}
const palabra = prompt("Introduce una palabra para contar sus sílabas:");
contarSilabas(palabra);
