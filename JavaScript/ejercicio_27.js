function calcularPromedioFinal() {
  let nota1 = parseFloat(prompt("Introduce la primera nota:"));
  let nota2 = parseFloat(prompt("Introduce la segunda nota:"));
  let nota3 = parseFloat(prompt("Introduce la tercera nota:"));
  let examenFinal = parseFloat(prompt("Introduce la nota del examen final:"));
  let trabajoFinal = parseFloat(prompt("Introduce la nota del trabajo final:"));

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(examenFinal) || isNaN(trabajoFinal)) {
    alert("Por favor, introduce valores numéricos válidos para todas las notas.");
    return;
  }

  let promedioParciales = (nota1 + nota2 + nota3) / 3;
  let porcentajeParciales = promedioParciales * 0.55;
  let porcentajeExamenFinal = examenFinal * 0.30;
  let porcentajeTrabajoFinal = trabajoFinal * 0.15;
  let promedioFinal = porcentajeParciales + porcentajeExamenFinal + porcentajeTrabajoFinal;

  alert("El promedio final es: " + promedioFinal.toFixed(2));
}
calcularPromedioFinal();
