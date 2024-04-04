function calcularInteresModificado() {
    let saldo = parseFloat(prompt("Introduce el saldo inicial:"));
    let interesPagado;
    let saldoFinal;

    if (saldo < 100000) {
        interesPagado = saldo * 0.03; // Interés del 3% para saldos menores a 100,000
    } else {
        interesPagado = saldo * 0.04; // Interés del 4% para saldos de 100,000 o más
    }
    saldoFinal = saldo + interesPagado;

    alert('Saldo Final: $' + saldoFinal.toFixed(2) + '\nInterés Pagado: $' + interesPagado.toFixed(2));
}
calcularInteresModificado();
