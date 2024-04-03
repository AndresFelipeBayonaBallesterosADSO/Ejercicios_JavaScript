function calcularVolumenEsfera() {
  let radio = parseFloat(prompt("Introduce el radio de la esfera:"));

  if (isNaN(radio)) {
    alert("Por favor, introduce un valor numérico válido para el radio.");
    return;
  }

  let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

  alert("El volumen de la esfera es: " + volumen.toFixed(2) + " unidades cúbicas.");
}
calcularVolumenEsfera();
