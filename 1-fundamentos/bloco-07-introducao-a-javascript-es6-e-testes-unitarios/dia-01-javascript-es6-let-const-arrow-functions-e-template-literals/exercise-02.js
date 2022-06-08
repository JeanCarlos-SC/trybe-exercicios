const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sort = (array) => {
    array.sort((a, b) => a - b);
    console.log(array);
}

sort(oddsAndEvens)// será necessário alterar essa linha 😉