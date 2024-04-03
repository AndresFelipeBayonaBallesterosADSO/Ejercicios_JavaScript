function realizarOperacion(operacion) {
  let num1 = parseFloat(prompt("Introduce el primer número:"));
  let num2 = parseFloat(prompt("Introduce el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, introduce números válidos.");
    return;
  }

  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = num1 + num2;
      break;
    case 'restar':
      resultado = num1 - num2;
      break;
    case 'multiplicar':
      resultado = num1 * num2;
      break;
    case 'dividir':
      if (num2 === 0) {
        alert("No se puede dividir por cero.");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      alert("Operación no válida.");
      return;
  }

  alert(`El resultado de ${operacion} es: ${resultado}`);
}

realizarOperacion('sumar');
realizarOperacion('restar');
realizarOperacion('multiplicar');
realizarOperacion('dividir');
