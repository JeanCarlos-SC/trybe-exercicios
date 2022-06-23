const fatorial = (n) => {

    for (i = n; i <= n && i >= 0; i -= 1) {
        if (n != i && i > 0) {
            n *= i;
        } else if (n === 0) {
            n = 1;
        }
    }
    return n;
}

console.log(fatorial(0));

let n = 10;
for (i = n; i <= n && i >= 0; i -= 1) { const factor = (n != i && i > 0) ? n *= i : n = 1 };
console.log(n);

