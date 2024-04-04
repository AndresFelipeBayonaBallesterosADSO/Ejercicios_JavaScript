function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

let numero = parseFloat(prompt("Introduce un número:"));
if (!isNaN(numero)) {
    let resultado = determinarParidad(numero);
    alert(`El número es ${resultado}.`);
} else {
    alert("Por favor, introduce un número válido.");
}
