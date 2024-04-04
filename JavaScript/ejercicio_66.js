function ProgramaInversionModificado() {
    const Cantidad = parseFloat(prompt("Introduce la cantidad a invertir:"));
    const InteresAnual = parseFloat(prompt("Introduce el interés anual (%):"));
    const Anios = parseInt(prompt("Introduce el número de años:"));

    if (isNaN(Cantidad) || isNaN(InteresAnual) || isNaN(Anios) || Cantidad <= 0 || InteresAnual <= 0 || Anios <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let capital = Cantidad;
    let resultado = "Capital obtenido cada año:\n";

    for (let i = 1; i <= Anios; i++) {
        const interesPorcentaje = InteresAnual / 100;
        const interesSimple = capital * interesPorcentaje;
        capital += interesSimple;

        resultado += `Año ${i}: $${capital.toFixed(2)}\n`;
    }

    alert(resultado);
}

ProgramaInversionModificado();
