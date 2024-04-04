function restaNumerosModificada() {
    let num1 = parseFloat(prompt('Introduce el primer número:'));
    let num2 = parseFloat(prompt('Introduce el segundo número:'));

    if (num1 > num2) {
        let resultado = num1 - num2;
        alert('La resta es: ' + resultado);
    } else {
        alert('No es posible realizar la operación. El primer número debe ser mayor que el segundo.');
    }
}
restaNumerosModificada();
