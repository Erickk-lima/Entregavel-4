function calcularMDC(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    while (num2 !== 0) {
        let resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }
    return num1;
}

module.exports = calcularMDC;