function calcularVelocidadProyectil() {
  let distanciaKm = parseFloat(prompt("Introduce la distancia recorrida por el proyectil en kilómetros:"));
  let tiempoMin = parseFloat(prompt("Introduce el tiempo que tardó el proyectil en minutos:"));

  if (isNaN(distanciaKm) || isNaN(tiempoMin)) {
    alert("Por favor, introduce valores numéricos válidos.");
    return;
  }

  let distanciaM = distanciaKm * 1000;
  let tiempoS = tiempoMin * 60;

  let velocidad = distanciaM / tiempoS;

  alert("La velocidad del proyectil es: " + velocidad.toFixed(2) + " metros/segundo.");
}

calcularVelocidadProyectil();
