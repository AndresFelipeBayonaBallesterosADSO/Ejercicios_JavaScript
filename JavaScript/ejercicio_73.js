function contarLetrasModificada() {
    const fraseInput = prompt("Introduce una frase:").trim();
    const letraInput = prompt("Introduce una letra para contar en la frase:").trim();
  
    if (fraseInput === "" || letraInput === "") {
        alert("Por favor, introduce una frase y una letra antes de contar.");
        return;
    }
    const letra = letraInput.toLowerCase();
    const frase = fraseInput.toLowerCase();
    let conteo = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            conteo++;
        }
    }
  
    alert(`La letra "${letraInput}" aparece ${conteo} veces en la frase.`);
}

contarLetrasModificada();
