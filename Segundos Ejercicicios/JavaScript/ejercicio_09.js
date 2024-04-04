function validarPIN(pin) {
    // Usar una expresión regular para validar el PIN
    const patron = /^\d{4}(\d{2})?$/;
    return patron.test(pin);
}
console.log(validarPIN("1234"));  // Debería devolver true
console.log(validarPIN("45135"));  // Debería devolver false
console.log(validarPIN("123456")); // Debería devolver true
console.log(validarPIN("abc123")); // Debería devolver false
console.log(validarPIN("12345"));  // Debería devolver false
console.log(validarPIN("1234567")); // Debería devolver false
