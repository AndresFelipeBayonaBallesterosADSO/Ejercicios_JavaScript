function MostrarPalabraModificada() {
    const Palabra = prompt("Introduce una palabra:").trim();

    if (Palabra === "") {
        alert("Por favor, ingrese una palabra.");
        return;
    }
    
    let resultado = "";
    for (let i = 0; i < 10; i++) {
        resultado += Palabra + "\n"; 
    }

    alert(resultado);
}
MostrarPalabraModificada();
