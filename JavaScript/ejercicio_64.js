function ProgramaMostrarImparesModificado() {
    const numero = parseInt(prompt("Introduce un número:"));

    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let impares = "";

    for (let i = 1; i <= numero; i += 2) {
        impares += i + ", ";
    }

    impares = impares.slice(0, -2);

    alert("Números impares hasta " + numero + ": " + impares);
}

ProgramaMostrarImparesModificado();
