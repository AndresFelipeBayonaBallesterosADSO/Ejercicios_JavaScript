function evaluarCandidato() {
    const nombre = prompt("Introduce tu nombre:");
    const edad = parseInt(prompt("Introduce tu edad:"));
    const estatura = parseInt(prompt("Introduce tu estatura en cm:"));
    const peso = parseInt(prompt("Introduce tu peso en kg:"));
  
    let mensaje;
  
    if (edad <= 0 || edad > 19) {
      mensaje = "La edad debe estar entre 1 y 19 años.";
    } else if (estatura < 175) {
      mensaje = "La estatura debe ser mayor a 175 cm.";
    } else if (peso < 75 || peso > 80) {
      mensaje = "El peso debe estar entre 75 y 80 kg.";
    } else {
      mensaje = `${nombre}, ¡Felicidades! Has sido seleccionado para el equipo de basquetbol.`;
    }
  
    alert(mensaje);
  }
  
  evaluarCandidato();
  