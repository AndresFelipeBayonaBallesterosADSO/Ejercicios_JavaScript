function calcularTiempoEstimado() {
  let radio = parseFloat(prompt("Introduce el radio del depósito en metros:"));
  let altura = parseFloat(prompt("Introduce la altura del depósito en metros:"));
  let caudal = parseFloat(prompt("Introduce el caudal (en metros cúbicos por segundo):"));

  if (isNaN(radio) || isNaN(altura) || isNaN(caudal)) {
    alert("Por favor, asegúrate de introducir valores numéricos válidos.");
    return;
  }

  let volumen = Math.PI * Math.pow(radio, 2) * altura;

  let tiempoEstimado = volumen / caudal;

  alert("Tiempo estimado para llenar el depósito: " + tiempoEstimado.toFixed(2) + " segundos.");
}
calcularTiempoEstimado();
