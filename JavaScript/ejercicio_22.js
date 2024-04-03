function calcularCostoTotal() {
  let minutos = parseFloat(prompt("Introduce los minutos utilizados:"));

  if (isNaN(minutos)) {
    alert("Por favor, introduce un número válido de minutos.");
    return;
  }

  let costoPorMinuto = 355;
  let iva = 0.20;

  let costoTotal = minutos * costoPorMinuto * (1 + iva);

  alert("El total a pagar es: " + costoTotal.toFixed(2) + " unidades monetarias.");
}
calcularCostoTotal();
