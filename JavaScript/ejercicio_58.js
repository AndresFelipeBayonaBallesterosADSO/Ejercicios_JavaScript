function calcularSignoModificado() {
    let mes = prompt("Introduce el mes de tu nacimiento:").toLowerCase(); // Solicitamos el mes y lo convertimos a minúsculas

    let mensaje;

    switch (mes) {
        case "enero":
            mensaje = "Capricornio (22 diciembre - 19 enero)";
            break;
        case "febrero":
            mensaje = "Acuario (20 enero - 18 febrero)";
            break;
        case "marzo":
            mensaje = "Piscis (19 febrero - 20 marzo)";
            break;
        case "abril":
            mensaje = "Aries (21 marzo - 19 abril)";
            break;
        case "mayo":
            mensaje = "Tauro (20 abril - 20 mayo)";
            break;
        case "junio":
            mensaje = "Géminis (21 mayo - 20 junio)";
            break;
        case "julio":
            mensaje = "Cáncer (21 junio - 22 julio)";
            break;
        case "agosto":
            mensaje = "Leo (23 julio - 22 agosto)";
            break;
        case "septiembre":
            mensaje = "Virgo (23 agosto - 22 septiembre)";
            break;
        case "octubre":
            mensaje = "Libra (23 septiembre - 22 octubre)";
            break;
        case "noviembre":
            mensaje = "Escorpio (23 octubre - 21 noviembre)";
            break;
        case "diciembre":
            mensaje = "Sagitario (22 noviembre - 21 diciembre)";
            break;
        default:
            mensaje = "Por favor, ingrese un nombre de mes válido.";
            break;
    }

    alert(mensaje);
}
calcularSignoModificado();
