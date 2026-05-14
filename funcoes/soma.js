
function calcularSoma(numeros) {
    let soma = 0;
    let i = 0;
    let n = numeros.length;

    while (i < n) {
        let valor = numeros[i];
        soma = Number(soma) + Number(valor);
        i++;
    }
    
    return soma;
}


module.exports = calcularSoma;