function calcularSueldoModificado() {
  let nombre = prompt("Introduce el nombre del empleado:");
  let horasTrabajo = parseFloat(prompt("Introduce las horas trabajadas:"));
  let pagoPorHora = parseFloat(prompt("Introduce el pago por hora:"));

  if (isNaN(horasTrabajo) || isNaN(pagoPorHora)) {
    alert("Por favor, introduce valores numéricos válidos para las horas de trabajo y el pago por hora.");
    return;
  }

  let sueldo = horasTrabajo * pagoPorHora;

  alert("El sueldo de " + nombre + " es: $" + sueldo.toFixed(2));
}
calcularSueldoModificado();
