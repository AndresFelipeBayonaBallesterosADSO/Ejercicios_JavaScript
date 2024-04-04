function encontrarMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) {
    let mayor = encontrarMayor(num1, num2);
    alert(`El mayor es: ${mayor}`);
} else {
    alert("Por favor, introduce números válidos.");
}
