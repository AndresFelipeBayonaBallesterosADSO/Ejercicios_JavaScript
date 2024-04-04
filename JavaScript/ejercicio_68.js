function mostrarTablaMultiplicar() {
    let numero = parseInt(prompt("Introduce un número para ver su tabla de multiplicar:"));

    if(isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return; 
    }

    let tabla = `Tabla del ${numero}:\n`;

    for (let producto = 1; producto <= 10; producto++) {
        let resultado = numero * producto;
        tabla += `${numero} * ${producto} = ${resultado}\n`; 
    }

    alert(tabla);
}
mostrarTablaMultiplicar();
