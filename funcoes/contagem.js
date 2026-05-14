
function contarAprovados(listaDeNotas) {
    let contador = 0;
    let i = 0;
    while (listaDeNotas.length > i) {
        let informar = listaDeNotas[i];
        if (informar >= 50) {
            contador++;
        }
        i++;
    }
    return contador;
}



module.exports = contarAprovados;