function invertirFraseModificada() {
    let frase = prompt("Introduce la frase que deseas invertir:");

    let fraseInvertida = frase.split('').reverse().join('');

    alert("Frase invertida: " + fraseInvertida);
}

invertirFraseModificada();
