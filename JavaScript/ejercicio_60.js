function solicitarInformacionYCalcularPago() {
    const nombre = prompt("Introduce tu nombre:");
    const n_cursos = parseInt(prompt("Introduce el número de cursos que deseas tomar:"));
  
    if (!nombre || isNaN(n_cursos)) {
      alert("Todos los campos son obligatorios.");
      return; 
    }
  
    const pagoTotal = calcularPago(n_cursos);
  
    alert(`${nombre}, el pago total es: $${pagoTotal.toLocaleString()}`);
  }
  
  function calcularPago(nCursos) {
    const costoCurso = nCursos <= 6 ? 2000000 : 1200000;
    return nCursos * costoCurso;
  }
  solicitarInformacionYCalcularPago();
  