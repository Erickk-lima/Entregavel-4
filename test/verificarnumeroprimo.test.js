const verificarPrimo = require('../funcoes/verificarnumeroprimo');

test('deve identificar corretamente números primos e não primos', () => {
    // Casos Verdadeiros (Primos)
    expect(verificarPrimo(2)).toBe(true);
    expect(verificarPrimo(7)).toBe(true);
    expect(verificarPrimo(13)).toBe(true);

    // Casos Falsos (Não Primos)
    expect(verificarPrimo(1)).toBe(false);
    expect(verificarPrimo(4)).toBe(false);
    expect(verificarPrimo(10)).toBe(false);
    expect(verificarPrimo(0)).toBe(false);
    expect(verificarPrimo(-5)).toBe(false);
});