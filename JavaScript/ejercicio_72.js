function invertirPalabraModificada() {
    const palabraInput = prompt("Introduce una palabra para invertirla:").trim();

    if (palabraInput === "") {
        alert("Por favor, introduce una palabra antes de invertirla.");
        return;
    }

    let palabraInvertida = "";
    for (let i = palabraInput.length - 1; i >= 0; i--) {
        palabraInvertida += palabraInput[i];
    }

    alert("Palabra invertida: " + palabraInvertida);
}

invertirPalabraModificada();
