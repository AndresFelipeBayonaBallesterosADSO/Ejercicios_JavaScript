function calcularHarinaModificada() {
  let harina = prompt("Introduce la cantidad de harina (en gramos):");
  let cacao = prompt("Introduce la cantidad de cacao (en gramos):");
  let nueces = prompt("Introduce la cantidad de nueces (en gramos):");

  let cantidadNueces = parseInt(nueces) || 0;

  let cantidadHarina = parseInt(harina) + parseInt(cacao) + cantidadNueces;

  alert("Cantidad total de harina necesaria: " + cantidadHarina + " gramos");
}
calcularHarinaModificada();
