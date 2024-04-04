function mostrarElMayor() {
    const numero1 = parseFloat(prompt("Introduce el primer número:"));
    const numero2 = parseFloat(prompt("Introduce el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    if (numero1 > numero2) {
        alert(`El mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        alert(`El mayor es: ${numero2}`);
    } else {
        alert("Ambos números son iguales.");
    }
}
mostrarElMayor();
