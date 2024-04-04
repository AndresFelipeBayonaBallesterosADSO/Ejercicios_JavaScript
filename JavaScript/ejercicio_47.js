function calcularModificado() {
    let valor1 = parseFloat(prompt("Introduce el primer valor:"));
    let valor2 = parseFloat(prompt("Introduce el segundo valor:"));
    let valor3 = parseFloat(prompt("Introduce el tercer valor:"));

    if (valor1 === valor2 && valor2 === valor3) {
        alert("Los tres valores son iguales.");
    } else {
        let mayor = Math.max(valor1, valor2, valor3);

        let menor = Math.min(valor1, valor2, valor3);

        alert("El mayor valor es: " + mayor + "\nEl menor valor es: " + menor);
    }
}
calcularModificado();
