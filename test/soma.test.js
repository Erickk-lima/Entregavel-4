
const calcularSoma = require('../funcoes/soma');

test('deve somar corretamente uma lista de números', () => {
    // Cenário 1: Números positivos
    expect(calcularSoma([10, 20, 30])).toBe(60);

    // Cenário 2: Números decimais (float)
    expect(calcularSoma([1.5, 2.5, 1])).toBe(5);

    // Cenário 3: Lista vazia
    expect(calcularSoma([])).toBe(0);

});