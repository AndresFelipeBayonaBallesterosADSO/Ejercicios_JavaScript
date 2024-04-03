function calcularReparticionModificada() {
  let totalTapas = parseInt(prompt("Introduce el total de tapas de gaseosas:"));

  if (isNaN(totalTapas)) {
    alert("Por favor, introduce un número válido de tapas.");
    return;
  }

  let parteMartin = (2 / 3) * totalTapas;
  let parteJairo = (1 / 4) * totalTapas;
  let parteLorena = totalTapas - parteMartin - parteJairo;

  alert("Parte de Lorena: " + parteLorena + " tapas de gaseosas.");
}
calcularReparticionModificada();
