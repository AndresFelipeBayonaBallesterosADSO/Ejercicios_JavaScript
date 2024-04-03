function evaluarObligacionTributaria() {
  const edadUsuario = parseInt(prompt("Por favor, introduce tu edad:"));

  const ingresosUsuario = parseFloat(prompt("Por favor, introduce tus ingresos mensuales:"));

  if (isNaN(edadUsuario) || isNaN(ingresosUsuario)) {
    alert("Por favor, introduce valores numéricos válidos.");
    return; 
  }

  const mensajeResultado = (edadUsuario > 16 && ingresosUsuario >= 1000) ? "Debe tributar." : "No debe tributar.";

  alert(mensajeResultado);
}

evaluarObligacionTributaria();
