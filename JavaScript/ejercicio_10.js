function seleccionarTipoPizza() {
  const tipo = prompt("Introduce el tipo de pizza (vegetariana o no vegetariana):").toLowerCase();

  let opciones;
  if (tipo === 'vegetariana') {
    opciones = "pimiento, champiñones, cebolla, tomate";
  } else if (tipo === 'no vegetariana') {
    opciones = "peperoni, salchichas, tocino, carne";
  } else {
    alert("Por favor, introduce un tipo de pizza válido.");
    return;
  }

  const ingrediente = prompt(`Elige un ingrediente para tu pizza ${tipo}: ${opciones}`);

  confirmarPizza(tipo, ingrediente);
}

function confirmarPizza(tipo, ingrediente) {
  alert(`Has seleccionado una pizza ${tipo} con ${ingrediente}, mozzarella y tomate.`);
}

seleccionarTipoPizza();
