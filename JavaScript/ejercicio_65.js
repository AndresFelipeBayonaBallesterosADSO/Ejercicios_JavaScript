function ProgramacuentaAtrasModificado() {
    const numero = parseInt(prompt("Introduce un número:"));

    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let cuentaAtras = "";

    for(let i = numero; i >= 0; i--) {
        cuentaAtras += i + (i > 0 ? ", " : ""); 
    }

    alert("Cuenta atrás desde " + numero + " hasta 0: " + cuentaAtras);
}
ProgramacuentaAtrasModificado();
