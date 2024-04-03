function calcularPesoTotalCamion() {
  let numCajas = parseFloat(prompt("Introduce el número de cajas en el camión:"));

  let pesoPorCaja = 748;

  if (isNaN(numCajas)) {
    alert("Por favor, introduce un número válido de cajas.");
    return;
  }

  let pesoTotal = numCajas * pesoPorCaja;

  alert("El camión transporta " + pesoTotal + " kilogramos en total.");
}
calcularPesoTotalCamion();
