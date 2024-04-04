function calcularDescuentoModificado() {
    let consumo = parseFloat(prompt("Introduce el monto de consumo:"));
    let descuento = 0;

    if (consumo > 130000) {
        descuento = consumo * 0.15;
    }

    let totalAPagar = consumo - descuento;

    alert("El monto a pagar es: $" + totalAPagar.toFixed(2)); // Mostrar solo dos decimales
}
calcularDescuentoModificado();
