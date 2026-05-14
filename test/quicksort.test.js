const quicksort = require('../funcoes/quicksort');

test('deve ordenar corretamente uma lista de números', () => {
    // Caso clássico: desordenado
    expect(quicksort([10, 5, 8, 1])).toEqual([1, 5, 8, 10]);

    // Caso com números repetidos
    expect(quicksort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);

    // Caso com números negativos
    expect(quicksort([0, -5, 2, -10])).toEqual([-10, -5, 0, 2]);

    // Lista já ordenada
    expect(quicksort([1, 2, 3])).toEqual([1, 2, 3]);

    // Lista vazia
    expect(quicksort([])).toEqual([]);
});