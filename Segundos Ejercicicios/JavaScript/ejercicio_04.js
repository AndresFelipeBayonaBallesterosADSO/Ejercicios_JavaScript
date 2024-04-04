function evaluarLongitudPalabra(palabra) {
    if (palabra.length < 5) {
        return "La palabra es corta.";
    } else {
        return "La palabra es larga.";
    }
}

let palabra = prompt("Introduce una palabra:");
let resultado = evaluarLongitudPalabra(palabra);
alert(resultado);
