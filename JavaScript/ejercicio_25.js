function calcularDescuento() {
  let costo = parseFloat(prompt("Introduce el costo del producto:"));

  if (isNaN(costo)) {
    alert("Por favor, introduce un costo válido.");
    return;
  }

  let descuento = costo * 0.10;
  let precioFinal = costo - descuento;

  alert("El descuento aplicado es de: $" + descuento.toFixed(2) + "\nEl precio final es de: $" + precioFinal.toFixed(2));
}
calcularDescuento();
