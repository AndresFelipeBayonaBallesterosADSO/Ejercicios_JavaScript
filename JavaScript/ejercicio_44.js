function convertirMonedaModificada() {
    const montoDePesos = parseFloat(prompt("Introduce el monto en pesos:"));

    if (isNaN(montoDePesos)) {
        alert("Por favor, introduce un monto válido.");
        return;
    }

    const valorDolar = 0.012;
    const valorEuro = 0.011;

    const montoDolares = montoDePesos * valorDolar;
    const montoEuros = montoDePesos * valorEuro;

    alert("El equivalente en dólares es: $" + montoDolares.toFixed(2) + "\n" +
          "El equivalente en euros es: €" + montoEuros.toFixed(2));
}
convertirMonedaModificada();
