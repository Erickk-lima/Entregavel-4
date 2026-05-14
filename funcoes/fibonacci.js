function gerarFibonacci(n) {
    let termo1 = 0;
    let termo2 = 1;
    let termo3;
    let sequencia = [];

    if (n >= 1) sequencia.push(termo1);
    if (n >= 2) sequencia.push(termo2);

    for (let i = 3; i <= n; i++) {
        termo3 = termo1 + termo2;
        sequencia.push(termo3);
        termo1 = termo2;
        termo2 = termo3;
    }

    return sequencia;
}

module.exports = gerarFibonacci;