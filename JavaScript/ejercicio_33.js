function calcularEdadMadreModificada() {
  let fechaNacimientoMadreStr = prompt("Introduce la fecha de nacimiento de la madre (formato YYYY-MM-DD):");
  let fechaNacimientoHijoStr = prompt("Introduce la fecha de nacimiento del hijo (formato YYYY-MM-DD):");

  let fechaNacimientoMadre = new Date(fechaNacimientoMadreStr);
  let fechaNacimientoHijo = new Date(fechaNacimientoHijoStr);

  if (isNaN(fechaNacimientoMadre.getTime()) || isNaN(fechaNacimientoHijo.getTime())) {
    alert("Por favor, introduce fechas válidas.");
    return;
  }

  let diferencia = fechaNacimientoHijo.getFullYear() - fechaNacimientoMadre.getFullYear();

  alert("La edad de la madre en el momento del nacimiento del hijo era: " + diferencia + " años");
}
calcularEdadMadreModificada();
