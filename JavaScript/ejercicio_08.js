function evaluarRendimiento() {
  const puntuacionUsuario = parseFloat(prompt("Por favor, introduce tu puntuación (entre 0.0 y 1.0):"));

  if (isNaN(puntuacionUsuario) || puntuacionUsuario < 0 || puntuacionUsuario > 1) {
    alert("Por favor, ingrese una puntuación válida entre 0.0 y 1.0.");
    return;
  }

  let nivelRendimiento;
  if (puntuacionUsuario === 0.0) {
    nivelRendimiento = "Inaceptable";
  } else if (puntuacionUsuario === 0.4) {
    nivelRendimiento = "Aceptable";
  } else if (puntuacionUsuario >= 0.6) {
    nivelRendimiento = "Meritorio";
  }

  let compensacion = 2400 * puntuacionUsuario;

  alert("Nivel de rendimiento: " + nivelRendimiento + "\nCantidad de dinero recibida: " + compensacion.toFixed(2) + "€");
}

evaluarRendimiento();
