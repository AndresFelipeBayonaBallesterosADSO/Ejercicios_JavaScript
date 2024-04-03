function calcularTasaImpositiva() {
  const ingresoAnual = parseFloat(prompt("Por favor, introduce tu ingreso anual:"));

  if (isNaN(ingresoAnual)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  let tasaImpositiva;
  if (ingresoAnual <= 10000) {
    tasaImpositiva = "No debe pagar impuestos";
  } else if (ingresoAnual <= 20000) {
    tasaImpositiva = "5%";
  } else if (ingresoAnual <= 35000) {
    tasaImpositiva = "10%";
  } else if (ingresoAnual <= 60000) {
    tasaImpositiva = "20%";
  } else {
    tasaImpositiva = "45%";
  }

  alert("Tipo de impositivo: " + tasaImpositiva);
}

calcularTasaImpositiva();
