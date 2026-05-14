const gerarFibonacci = require('../funcoes/fibonacci');

test('deve gerar a sequência de Fibonacci corretamente', () => {
    // Teste com 5 termos
    expect(gerarFibonacci(5)).toEqual([0, 1, 1, 2, 3]);

    // Teste com 8 termos
    expect(gerarFibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);

    // Caso especial: apenas 1 termo
    expect(gerarFibonacci(1)).toEqual([0]);

    // Caso especial: 0 termos
    expect(gerarFibonacci(0)).toEqual([]);
});