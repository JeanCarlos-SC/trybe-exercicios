let n = 10;
let numbers = [];
for ( i = n -1; i < n && i > 0; i -= 1){
    numbers.push(i);
}

for (let index = 1; index <= numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[secondIndex] === n - 1) {
        let multi = numbers[secondIndex] * n;
        numbers[secondIndex] = multi;
        } else {
        let multi = numbers[secondIndex - secondIndex] * numbers[index - (index -1)];
        numbers[index - (index -1)] = multi;
        numbers.shift();
        }
    }
  }

  console.log(+n+"! =",numbers[0]);