function ProgramaEdadModificado() {
    const Edad = parseInt(prompt("Introduce tu edad:"));

    if (isNaN(Edad) || Edad < 1) {
        alert("Por favor, ingresa una edad válida.");
        return;
    }

    let resultado = "";

    for (let i = 1; i <= Edad; i++) {
        resultado += `Ha cumplido ${i} año(s).\n`; 
    }

    alert(resultado);
}

ProgramaEdadModificado();
