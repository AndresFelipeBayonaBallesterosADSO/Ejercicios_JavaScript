function calcularAreaModificada() {
    const figura = prompt("Ingrese 'T' para triángulo o 'C' para círculo:").toUpperCase();
    let area;

    if (figura === 'T') {
        const base = parseFloat(prompt("Ingrese la base del triángulo:"));
        const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        area = (base * altura) / 2;
        alert("El área del triángulo es: " + area.toFixed(2));
    } else if (figura === 'C') {
        const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        area = Math.PI * Math.pow(radio, 2);
        alert("El área del círculo es: " + area.toFixed(2));
    } else {
        alert("Por favor, ingrese 'T' para un triángulo o 'C' para un círculo.");
    }
}
calcularAreaModificada();
