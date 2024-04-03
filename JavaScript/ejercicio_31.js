function calcularDistanciaModificada() {
  let x1 = parseFloat(prompt("Introduce el valor de x1:"));
  let y1 = parseFloat(prompt("Introduce el valor de y1:"));
  let x2 = parseFloat(prompt("Introduce el valor de x2:"));
  let y2 = parseFloat(prompt("Introduce el valor de y2:"));

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    alert("Por favor, introduce valores numéricos válidos para las coordenadas.");
    return;
  }

  let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  alert('La distancia entre los puntos es: ' + distancia.toFixed(2));
}
calcularDistanciaModificada();
