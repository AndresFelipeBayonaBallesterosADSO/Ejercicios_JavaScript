function comprobarPrimoModificado() {
    const numeroInput = prompt("Introduce un número para comprobar si es primo:");

    if (!numeroInput.match(/^\d+$/)) {
        alert("Por favor, introduce un número entero válido.");
        return;
    }

    const numero = parseInt(numeroInput);

    if (numero <= 1) {
        alert(`${numero} no es un número primo.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            alert(`${numero} no es un número primo.`);
            return;
        }
    }

    alert(`${numero} es un número primo.`);
}
comprobarPrimoModificado();
