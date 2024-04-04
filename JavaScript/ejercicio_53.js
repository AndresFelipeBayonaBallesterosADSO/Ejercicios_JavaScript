function calcularTotalModificado() {
    let subtotal = 0;
    let producto;
    let continuar = true;

    while (continuar) {
        producto = prompt("Introduce el precio del producto o presiona cancelar para finalizar:");

        if (producto === null) { // El usuario presionó cancelar
            continuar = false;
        } else {
            producto = parseFloat(producto);
            if (!isNaN(producto)) {
                subtotal += producto; // Sumar al subtotal si es un número válido
            }
        }
    }

    let iva = subtotal * 0.16;
    let total = subtotal + iva;

    alert(`
        Resultados:
        Subtotal: $${subtotal.toFixed(2)}
        IVA (16%): $${iva.toFixed(2)}
        Total: $${total.toFixed(2)}
    `);
}
calcularTotalModificado();
