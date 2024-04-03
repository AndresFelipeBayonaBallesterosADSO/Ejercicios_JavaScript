function verificarParidad() {
  const entrada = prompt("Por favor, introduce un número:");

  const numeroEvaluado = parseInt(entrada);

  if (isNaN(numeroEvaluado)) {
    alert("Por favor, introduce un número válido.");
    return; 
  }

  if (numeroEvaluado % 2 === 0) {
    alert("El número es par.");
  } else {
    alert("El número es impar.");
  }
}
verificarParidad();
