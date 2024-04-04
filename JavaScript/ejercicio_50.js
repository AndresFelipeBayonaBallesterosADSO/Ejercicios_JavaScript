function evaluarCondicionesModificada() {
    let temperatura = parseFloat(prompt("Introduce la temperatura:"));
    let presion = parseFloat(prompt("Introduce la presión:"));

    if (presion > 200 || temperatura > 100) {
        alert("Alarma");
    } else {
        alert("Normal");
    }
}
evaluarCondicionesModificada();
