function calcularAreaTriangulo() {
  let base = parseFloat(prompt("Introduce la base del triángulo:"));
  let altura = parseFloat(prompt("Introduce la altura del triángulo:"));

  if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, introduce valores numéricos válidos.");
    return;
  }

  let area = (base * altura) / 2;

  alert("El área del triángulo es: " + area);
}
calcularAreaTriangulo();
