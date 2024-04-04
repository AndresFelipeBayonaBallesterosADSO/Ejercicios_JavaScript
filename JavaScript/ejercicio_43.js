function buscarCadenasModificada() {
    let texto2 = prompt("Introduce el texto:");

    // Expresión regular para encontrar cadenas de comillas dobles
    let regex = /"(?:\\.|[^\\"])*"/g;
    
    let coincidencias2 = texto2.match(regex);
    
    if (coincidencias2) {
        alert('Cadenas encontradas:\n' + coincidencias2.join('\n'));
    } else {
        alert('No se encontraron cadenas de comillas dobles.');
    }
}
buscarCadenasModificada();
