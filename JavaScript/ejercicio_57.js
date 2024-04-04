function asignarCalificacionModificada() {
    let calificacion = parseFloat(prompt("Introduce la calificación numérica:"));
    let calificacionLiteral;

    if (calificacion >= 9.1 && calificacion <= 10) {
        calificacionLiteral = "A: Excelente";
    } else if (calificacion >= 8.1 && calificacion < 9) {
        calificacionLiteral = "A: Muy bien";
    } else if (calificacion >= 7.5 && calificacion < 8) {
        calificacionLiteral = "A: Bien";
    } else {
        calificacionLiteral = "NA: No Aprobado";
    }

    alert("La calificación es: " + calificacionLiteral);
}
asignarCalificacionModificada();
