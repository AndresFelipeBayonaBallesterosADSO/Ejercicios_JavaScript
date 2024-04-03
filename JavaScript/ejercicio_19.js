function calcularCilindro() {
  let radio = parseFloat(prompt("Introduce el radio del cilindro:"));
  let altura = parseFloat(prompt("Introduce la altura del cilindro:"));

  if (isNaN(radio) || isNaN(altura)) {
    alert("Por favor, introduce valores numéricos válidos para el radio y la altura.");
    return;
  }

  let areaBase = Math.PI * Math.pow(radio, 2);
  let areaLateral = 2 * Math.PI * radio * altura;
  let areaTotal = 2 * areaBase + areaLateral;
  let volumen = Math.PI * Math.pow(radio, 2) * altura;

  alert("El área del cilindro es: " + areaTotal.toFixed(2) + "\nEl volumen del cilindro es: " + volumen.toFixed(2));
}

calcularCilindro();
