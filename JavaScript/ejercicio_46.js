function calcularMayorModificado() {
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));
    let numero3 = parseFloat(prompt("Introduce el tercer número:"));

    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    if (numero3 > mayor) {
        mayor = numero3;
    }

    alert("El mayor de los tres números es: " + mayor);
}
calcularMayorModificado();
