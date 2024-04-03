function convertirKmHrAMetrosSeg() {
  let velocidadKmHr = parseFloat(prompt("Introduce la velocidad en kilómetros por hora:"));

  if (isNaN(velocidadKmHr)) {
    alert("Por favor, introduce un número válido.");
    return;
  }

  let velocidadMetrosSeg = velocidadKmHr * 0.277778;

  alert(velocidadMetrosSeg.toFixed(2) + " Metros por segundo");
}
convertirKmHrAMetrosSeg();
