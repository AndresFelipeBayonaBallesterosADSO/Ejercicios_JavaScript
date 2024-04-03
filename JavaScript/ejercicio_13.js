function calcularMediaNumeros() {
  let num1 = parseFloat(prompt("Introduce el primer número:"));
  let num2 = parseFloat(prompt("Introduce el segundo número:"));
  let num3 = parseFloat(prompt("Introduce el tercer número:"));
  let num4 = parseFloat(prompt("Introduce el cuarto número:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    alert("Por favor, introduce solo valores numéricos.");
    return;
  }

  let media = (num1 + num2 + num3 + num4) / 4;

  alert("La media es: " + media);
}
calcularMediaNumeros();
