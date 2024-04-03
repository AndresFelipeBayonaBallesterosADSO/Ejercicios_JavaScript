function convertirCelsiusAFahrenheit() {
  let celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));

  if (isNaN(celsius)) {
    alert("Por favor, introduce un valor numérico válido.");
    return;
  }

  let fahrenheit = (celsius * 9 / 5) + 32;

  alert(celsius + " grados Celsius son " + fahrenheit.toFixed(2) + " grados Fahrenheit.");
}
convertirCelsiusAFahrenheit();

