function tablaDelCincoConAlert() {
    const respuesta = prompt("¿Quieres ver la tabla de multiplicar del número 5? (sí/no)");

    if (respuesta.toLowerCase() === "sí") {
        let resultado = "Tabla de multiplicar del número 5:\n";
        for (let i = 1; i <= 10; i++) {
            // Excluir explícitamente el resultado de 5 * 5
            if (i === 5) {
                continue;
            }
            resultado += `5 * ${i} = ${5 * i}\n`;
        }
        alert(resultado);
    } else {
        alert("Ok, quizás en otro momento.");
    }
}
tablaDelCincoConAlert();
