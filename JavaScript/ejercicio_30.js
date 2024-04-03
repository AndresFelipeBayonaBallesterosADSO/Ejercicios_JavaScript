function comprobarFortalezaModificada() {
  let contraseña = prompt("Introduce tu contraseña:");

  if (contraseña.length < 8 || contraseña.length > 12) {
    alert("La contraseña debe tener entre 8 y 12 caracteres.");
    return;
  }
  if (!/[A-Z]/.test(contraseña)) {
    alert("La contraseña debe contener al menos una mayúscula.");
    return;
  }
  if (!/[a-z]/.test(contraseña)) {
    alert("La contraseña debe contener al menos una minúscula.");
    return;
  }
  if (!/\d/.test(contraseña)) {
    alert("La contraseña debe contener al menos un dígito.");
    return;
  }

  alert("La contraseña es fuerte.");
}
comprobarFortalezaModificada();
