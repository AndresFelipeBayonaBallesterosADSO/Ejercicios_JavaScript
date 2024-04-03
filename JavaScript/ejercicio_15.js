function calcularCircunferencia() {
  let radio = parseFloat(prompt("Introduce el radio de la circunferencia:"));

  if (isNaN(radio)) {
    alert("Por favor, introduce un valor numérico válido para el radio.");
    return;
  }

  let longitud = 2 * Math.PI * radio;

  let area = Math.PI * Math.pow(radio, 2);

  alert("Longitud de la circunferencia: " + longitud.toFixed(2) + "\n" +
    "Área de la circunferencia: " + area.toFixed(2));
}
calcularCircunferencia();
