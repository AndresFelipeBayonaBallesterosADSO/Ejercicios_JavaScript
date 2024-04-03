function calcularAreaRectangulo() {
  let base = parseFloat(prompt("Introduce la base del rectángulo:"));
  let altura = parseFloat(prompt("Introduce la altura del rectángulo:"));

  if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, introduce valores numéricos válidos.");
    return;
  }

  let area = base * altura;

  alert("El área del rectángulo es: " + area);
}
calcularAreaRectangulo();
