function calcularAreaRectangulo() {
    let lado1 = parseFloat(prompt("Introduce el primer lado del rectángulo:"));
    let lado2 = parseFloat(prompt("Introduce el segundo lado del rectángulo:"));

    if (lado1 > 0 && lado2 > 0) {
        let area = lado1 * lado2;

        alert("El área del rectángulo es: " + area.toFixed(2));
    } else {
        alert("Los lados del rectángulo deben ser positivos.");
    }
}
calcularAreaRectangulo();
