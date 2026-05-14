function verificarPrimo(p) {
    let ePrimo = true;

    if (p <= 1) {
        ePrimo = false;
    } else {
        for (let i = 2; i < p; i++) {
            if (p % i === 0) {
                ePrimo = false;
                break;
            }
        }
    }
    return ePrimo;
}

module.exports = verificarPrimo;