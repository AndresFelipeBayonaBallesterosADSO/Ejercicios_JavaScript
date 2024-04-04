const PantallaTrianguloRectanguloModificado = () => {
    const altura = parseInt(prompt("Introduce la altura del triángulo:"));

    if (isNaN(altura) || altura <= 0) {
        console.log("Por favor, ingrese un número entero positivo para la altura.");
        return;
    }

    let triangulo = "";

    for (let i = 1; i <= altura; i++) {
        let fila = "*".repeat(i);
        
        triangulo += fila + "\n";
    }
    
    console.log(triangulo);
}
PantallaTrianguloRectanguloModificado();
