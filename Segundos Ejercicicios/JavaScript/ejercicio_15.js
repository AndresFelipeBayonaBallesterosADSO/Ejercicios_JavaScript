function verificarParidad() {
    // Generar un número aleatorio entre 1 y 10
    let numero = Math.floor(Math.random() * 10) + 1;

    // Verificar si el número es par o impar
    let esPar = numero % 2 === 0 ? "par" : "impar";

    console.log(`El número ${numero} es ${esPar}.`);
}
verificarParidad();
