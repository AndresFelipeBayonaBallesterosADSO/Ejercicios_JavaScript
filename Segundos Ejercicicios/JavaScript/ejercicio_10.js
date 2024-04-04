function generarPiramide(altura) {
    let piramide = "";

    for (let i = 1; i <= altura; i++) {
        let espacios = ' '.repeat(altura - i);

        let asteriscos = '*'.repeat(i * 2 - 1);

        piramide += espacios + asteriscos + espacios + '\n';
    }

    console.log(piramide);
}
generarPiramide(5);
