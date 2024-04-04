function verificarNumeroModificado() {
    let numero = parseFloat(prompt("Introduce un número:"));

    if (numero > 0 && numero < 100) {
        alert("El número es positivo y menor que 100.");
    } else {
        alert("El número no cumple ambas condiciones.");
    }
}
verificarNumeroModificado();
