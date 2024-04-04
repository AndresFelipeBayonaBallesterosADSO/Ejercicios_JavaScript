let formulario = document.createElement("form");
formulario.id = "formulario";

let inputContraseña = document.createElement("input");
inputContraseña.type = "password";
inputContraseña.id = "contraseña";
inputContraseña.name = "contraseña";
inputContraseña.placeholder = "Ingrese su contraseña";

let botonEnviar = document.createElement("button");
botonEnviar.type = "submit";
botonEnviar.textContent = "Verificar Contraseña";

formulario.appendChild(inputContraseña);
formulario.appendChild(botonEnviar);

document.body.appendChild(formulario);

let contraseñaCorrecta = "contraseña";

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let contraseñaIngresada = document.getElementById("contraseña").value;

    if (contraseñaIngresada === contraseñaCorrecta) {
        alert("¡Contraseña correcta! Bienvenido.");
    } else {
        alert("Contraseña incorrecta. Por favor, inténtelo nuevamente.");
    }
});
