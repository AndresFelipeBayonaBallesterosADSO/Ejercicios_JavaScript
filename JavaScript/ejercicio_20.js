function encontrarRaicesCuadraticas() {
  let A = parseFloat(prompt("Introduce el coeficiente A:"));
  let B = parseFloat(prompt("Introduce el coeficiente B:"));
  let C = parseFloat(prompt("Introduce el coeficiente C:"));

  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    alert("Por favor, introduce valores numéricos válidos para los coeficientes.");
    return;
  }

  let discriminante = B * B - 4 * A * C;

  if (discriminante > 0) {
    let raiz1 = (-B + Math.sqrt(discriminante)) / (2 * A);
    let raiz2 = (-B - Math.sqrt(discriminante)) / (2 * A);
    alert("Las raíces son: " + raiz1.toFixed(2) + " y " + raiz2.toFixed(2));
  } else if (discriminante === 0) {
    let raiz = -B / (2 * A);
    alert("La raíz doble es: " + raiz.toFixed(2));
  } else {
    alert("La ecuación no tiene raíces reales.");
  }
}
encontrarRaicesCuadraticas();
