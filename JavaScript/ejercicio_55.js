function calcularDescuentoModificado() {
    let tipoMembresia = prompt("Introduce el tipo de membresía (A, B, C):");
    let montoCompra = parseFloat(prompt("Introduce el monto de la compra:"));

    let descuento = 0;

    switch (tipoMembresia.toUpperCase()) {
        case 'A':
            descuento = 0.1; // 10% de descuento
            break;
        case 'B':
            descuento = 0.15; // 15% de descuento
            break;
        case 'C':
            descuento = 0.2; // 20% de descuento
            break;
        default:
            alert("Tipo de membresía no válido.");
            return;
    }

    let totalDescuento = montoCompra * descuento;
    let montoFinal = montoCompra - totalDescuento;

    alert("El descuento aplicado es de: " + (descuento * 100) + "%, por lo tanto, el monto a pagar es: $" + montoFinal.toFixed(2));
}
calcularDescuentoModificado();
