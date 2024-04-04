function calcularPresupuesto() {
    const metrosCuadrados = parseFloat(prompt("Introduce los metros cuadrados:"));
    const precioPorMetro = parseFloat(prompt("Introduce el precio por metro cuadrado:"));

    if (isNaN(metrosCuadrados) || isNaN(precioPorMetro)) {
        alert("Por favor, introduce valores numéricos válidos.");
        return;
    }

    const presupuesto = metrosCuadrados * precioPorMetro;

    alert(`Presupuesto: $${presupuesto.toFixed(2)}`);
}
calcularPresupuesto();
