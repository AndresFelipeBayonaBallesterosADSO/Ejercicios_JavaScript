function PapeleriaVentaModificada() {
    let CantidadLibros = parseFloat(prompt("Introduce la cantidad de libros vendidos:"));
    let CantidadCuadernos = parseFloat(prompt("Introduce la cantidad de cuadernos vendidos:"));
    let CantidadLapiceros = parseFloat(prompt("Introduce la cantidad de lapiceros vendidos:"));

    if (isNaN(CantidadLibros) || isNaN(CantidadCuadernos) || isNaN(CantidadLapiceros)) {
        alert("Por favor, introduce valores numéricos válidos.");
        return;
    }

    let Libros = 10000; 
    let Cuadernos = 7550;
    let Lapiceros = 5550; 

    let MontoTotal = (CantidadLibros * Libros) + (CantidadCuadernos * Cuadernos) + (CantidadLapiceros * Lapiceros);

    alert("El monto total de la venta es: $" + MontoTotal.toFixed(2));
}
PapeleriaVentaModificada();
