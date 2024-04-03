function calcularCompraModificada() {
  let producto1 = parseFloat(prompt("Introduce el precio del producto 1:"));
  let producto2 = parseFloat(prompt("Introduce el precio del producto 2:"));
  let producto3 = parseFloat(prompt("Introduce el precio del producto 3:"));
  let producto4 = parseFloat(prompt("Introduce el precio del producto 4:"));
  let producto5 = parseFloat(prompt("Introduce el precio del producto 5:"));

  let descuento1 = 0.05; // 5% de descuento
  let descuento2 = 0.02; // 2% de descuento

  let totalProducto1 = producto1 - (producto1 * descuento1);
  let totalProducto2 = producto2 - (producto2 * descuento1);
  let totalProducto3 = producto3 - (producto3 * descuento2);
  let totalProducto4 = producto4 - (producto4 * descuento2);
  let totalProducto5 = producto5 - (producto5 * descuento2);

  let totalCompra = totalProducto1 + totalProducto2 + totalProducto3 + totalProducto4 + totalProducto5;

  alert(`
        El valor a pagar por el producto 1 es: $${totalProducto1.toFixed(2)}
        El valor a pagar por el producto 2 es: $${totalProducto2.toFixed(2)}
        El valor a pagar por el producto 3 es: $${totalProducto3.toFixed(2)}
        El valor a pagar por el producto 4 es: $${totalProducto4.toFixed(2)}
        El valor a pagar por el producto 5 es: $${totalProducto5.toFixed(2)}
        El total de la compra es: $${totalCompra.toFixed(2)}
    `);
}
calcularCompraModificada();
