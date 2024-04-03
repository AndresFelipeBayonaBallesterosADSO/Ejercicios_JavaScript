function validarNumeroModificado() {
  let numero = prompt("Introduce un número:").trim();

  if (!/^(\d+(\.\d+)?)$/.test(numero)) {
    alert("Por favor, ingrese un número válido en punto flotante.");
  } else {
    alert("Número válido: " + numero);
  }
}
validarNumeroModificado();