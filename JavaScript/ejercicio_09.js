function calcularPrecioEntrada() {
  const edadUsuario = parseInt(prompt("Por favor, introduce tu edad:"));

  let precioEntrada = 0;

  if (edadUsuario < 4) {
    precioEntrada = 0;
  } else if (edadUsuario >= 4 && edadUsuario <= 18) {
    precioEntrada = 5;
  } else {
    precioEntrada = 10;
  }

  alert(`El precio de la entrada es: ${precioEntrada}€`);
}
calcularPrecioEntrada();
