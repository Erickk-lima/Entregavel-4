

const contarAprovados = require('../funcoes/contagem');

test('deve contar corretamente quantos alunos tiraram 50 ou mais', () => {
 
    const notas1 = [10, 50, 60, 30, 100];
    expect(contarAprovados(notas1)).toBe(3);

    
    const notas2 = [10, 20, 45];
    expect(contarAprovados(notas2)).toBe(0);

    
    const notas3 = [50, 50, 50];
    expect(contarAprovados(notas3)).toBe(3);

});
