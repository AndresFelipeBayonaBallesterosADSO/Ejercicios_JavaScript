function calcularTotalModificado() {
  let llaves = parseInt(prompt("Introduce la cantidad de llaves:"));
  let precio_llaves = parseInt(prompt("Introduce el precio por llave:"));
  let bomba = parseInt(prompt("Introduce el costo de la bomba:"));
  let cajas = parseInt(prompt("Introduce la cantidad de cajas:"));
  let precio_cajas = parseInt(prompt("Introduce el precio por caja:"));

  if (isNaN(llaves) || isNaN(precio_llaves) || isNaN(bomba) || isNaN(cajas) || isNaN(precio_cajas)) {
    alert("Por favor, introduce valores numéricos válidos.");
    return;
  }

  let total_llaves = llaves * precio_llaves;
  let total_cajas = cajas * precio_cajas;
  let total = total_llaves + bomba + total_cajas;

  let sobrante = 91000;
  let dinero_total = total + sobrante;

  alert("El jefe de obra tenía $" + dinero_total.toLocaleString() + " al principio.");
}
calcularTotalModificado();
