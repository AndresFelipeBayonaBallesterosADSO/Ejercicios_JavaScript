function calcularEdad() {
    const anioNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;

    if (edad < 0) {
        alert("Por favor, ingresa un año de nacimiento válido.");
    } else if (edad === 0) {
        alert("Recién nacido");
    } else if (edad === 1) {
        alert("1 año");
    } else {
        alert("Edad: " + edad + " años");
    }
}

calcularEdad();
