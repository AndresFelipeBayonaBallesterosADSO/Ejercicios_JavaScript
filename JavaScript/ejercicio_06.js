function asignarGrupo() {
  const nombreUsuario = prompt("Por favor, introduce tu nombre:").trim().toLowerCase();

  const sexoUsuario = prompt("Por favor, introduce tu sexo (masculino/femenino):");

  let grupoAsignado;

  if (sexoUsuario === "masculino" && nombreUsuario.charAt(0) >= 'n') {
    grupoAsignado = "B";
  } else if (sexoUsuario === "femenino" && nombreUsuario.charAt(0) < 'm') {
    grupoAsignado = "A";
  } else {
    grupoAsignado = "B";
  }

  alert("Tu grupo es: " + grupoAsignado);
}

asignarGrupo();
