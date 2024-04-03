document.addEventListener("DOMContentLoaded", function () {
  solicitarEvaluarContrasena();
});

function solicitarEvaluarContrasena() {
  const contrasenaUsuario = prompt("Por favor, ingresa tu contraseña:");

  if (contrasenaUsuario === null) {
    const reintentar = confirm("No ingresaste ninguna contraseña. ¿Deseas intentarlo de nuevo?");
    if (reintentar) {
      solicitarEvaluarContrasena();
    }
    return;
  }

  if (contrasenaUsuario.match(/[A-Za-z]/) && contrasenaUsuario.match(/[0-9]/)) {
    alert("La contraseña es válida.");
  } else {
    alert("La contraseña debe contener tanto letras como números.");
  }
}