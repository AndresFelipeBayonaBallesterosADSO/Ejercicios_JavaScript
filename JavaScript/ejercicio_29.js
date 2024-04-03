function calcularPromedioCalificaciones() {
  let examen1 = parseFloat(prompt("Introduce la calificación del examen 1 (entre 1 y 5):"));
  let examen2 = parseFloat(prompt("Introduce la calificación del examen 2 (entre 1 y 5):"));
  let examen3 = parseFloat(prompt("Introduce la calificación del examen 3 (entre 1 y 5):"));
  let examen4 = parseFloat(prompt("Introduce la calificación del examen 4 (entre 1 y 5):"));

  if (isNaN(examen1) || isNaN(examen2) || isNaN(examen3) || isNaN(examen4) ||
    examen1 < 1 || examen1 > 5 || examen2 < 1 || examen2 > 5 ||
    examen3 < 1 || examen3 > 5 || examen4 < 1 || examen4 > 5) {
    alert("Por favor, ingresa calificaciones válidas (entre 1 y 5) en todos los campos.");
  } else {
    let promedio = (examen1 + examen2 + examen3 + examen4) / 4;
    alert("Promedio: " + promedio.toFixed(2) + " de 5");
  }
}
calcularPromedioCalificaciones();
