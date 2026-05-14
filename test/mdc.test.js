const calcularMDC = require('../funcoes/mdc');

test('deve calcular o Máximo Divisor Comum corretamente', () => {
    // Caso padrão: MDC de 24 e 18 é 6
    expect(calcularMDC(24, 18)).toBe(6);

    // Quando um é múltiplo do outro: MDC de 10 e 5 é 5
    expect(calcularMDC(10, 5)).toBe(5);

    // Números primos entre si: MDC de 17 e 13 é 1
    expect(calcularMDC(17, 13)).toBe(1);

    // Com o número zero: MDC de 0 e 5 é 5
    expect(calcularMDC(0, 5)).toBe(5);
});