function calcularPagoModificado() {
    let horasTrabajadas = parseFloat(prompt("Introduce las horas trabajadas:"));
    let tipoEmpleado = prompt("Introduce el tipo de empleado ('planta' o 'administrativo'):");

    let pagoPorHora;

    if (tipoEmpleado === 'planta') {
        pagoPorHora = 20000;
    } else if (tipoEmpleado === 'administrativo') {
        pagoPorHora = 10000;
    } else {
        alert('Por favor seleccione un tipo de empleado válido');
        return;
    }

    let pagoTotal = horasTrabajadas * pagoPorHora;

    alert('El pago total es: $' + pagoTotal.toFixed(2));
}
calcularPagoModificado();
