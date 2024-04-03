function calcularDivision() {
  let dividendo = parseFloat(prompt("Introduce el primer número (dividendo):"));
  let divisor = parseFloat(prompt("Introduce el segundo número (divisor):"));

  try {
    if (isNaN(dividendo) || isNaN(divisor)) {
      throw new Error("Ambos valores deben ser números válidos.");
    }
    if (divisor === 0) {
      throw new Error("No se puede dividir entre cero.");
    }

    let resultado = dividendo / divisor;
    alert('El resultado de la división es: ' + resultado.toFixed(2));
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

calcularDivision();