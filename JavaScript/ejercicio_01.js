document.addEventListener("DOMContentLoaded", function () {
  function requestAge() {
    const ageInput = prompt("Por favor, ingrese su edad:");

    if (ageInput === null) {
      const retry = confirm("No ingresaste ninguna edad. ¿Quieres intentarlo de nuevo?");
      if (retry) {
        requestAge();
      }
      return;
    }

    const userAge = parseInt(ageInput);

    if (isNaN(userAge) || userAge <= 0) {
      alert("Por favor, ingrese un número positivo válido para la edad.");
      requestAge();
    } else {
      if (userAge < 18) {
        alert("Eres menor de edad.");
      } else {
        alert("Eres mayor de edad.");
      }
    }
  }

  requestAge();
});

