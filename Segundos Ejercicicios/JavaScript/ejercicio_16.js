function numeroATexto(numero) {
    switch (numero) {
        case 0:
            return "cero";
        case 1:
            return "uno";
        case 2:
            return "dos";
        case 3:
            return "tres";
        case 4:
            return "cuatro";
        case 5:
            return "cinco";
        default:
            return "Número fuera de rango";
    }
}

console.log(numeroATexto(0)); 
console.log(numeroATexto(3)); 
console.log(numeroATexto(5));
console.log(numeroATexto(8));
