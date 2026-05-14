function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivo = array[array.length - 1]; 
    let menores = [];
    let maiores = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivo) {
            menores.push(array[i]);
        } else {
            maiores.push(array[i]);
        }
    }

    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

module.exports = quicksort;