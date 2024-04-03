function calcularVolumenElipsoideModificado() {
  let A = parseFloat(prompt("Introduce el valor del semieje a:"));
  let B = parseFloat(prompt("Introduce el valor del semieje b:"));
  let C = parseFloat(prompt("Introduce el valor del semieje c:"));

  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    alert("Por favor, introduce valores numéricos válidos para los semiejes.");
    return;
  }

  let volumen = (4 / 3) * Math.PI * A * B * C;

  alert("El volumen del elipsoide es: " + volumen.toFixed(2));
}
calcularVolumenElipsoideModificado();
