function calcularExpresionModificada() {
  let a = parseFloat(prompt("Introduce el valor de a:"));
  let b = parseFloat(prompt("Introduce el valor de b:"));
  let c = parseFloat(prompt("Introduce el valor de c:"));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Por favor, introduce valores numéricos válidos para a, b, y c.");
    return;
  }

  let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;

  alert("El resultado es: " + resultado);
}
calcularExpresionModificada();
