function PantallaTrianguloRectanguloModificado() {
    const Altura = parseInt(prompt("Introduce la altura del triángulo:"));

    if (isNaN(Altura) || Altura <= 0) {
        alert("Por favor, ingrese un número entero positivo para la altura.");
        return;
    }

    let triangulo = "";

    for (let i = 1; i <= Altura; i++) {
        let fila = "*".repeat(i);
        
        triangulo += fila + "\n";
    }

    console.log(triangulo); 
    alert(triangulo); 
}
PantallaTrianguloRectanguloModificado();
