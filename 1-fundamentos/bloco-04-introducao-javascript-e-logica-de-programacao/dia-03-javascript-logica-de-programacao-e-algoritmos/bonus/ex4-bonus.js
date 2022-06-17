let n = 5;
let ast = [];
number = n - (n - 1);


for (index = 1; index <= n; index += 1) {
    ast.push(' ')
}

const base = (n + 1) / 2;
let right = base;
let left = base;

for (i = 1; i <= n; i += 1) {
    if (i === base) {
        ast[i - 1] = "*";
        right += 1;
        left -= 1;
        let string = ast.toString();
        let result = string.replace(/,/g, '');
        console.log(result);
    }
}

for (line = base; line < n && line >= 1; line += 1) {
    if (line <= right && line >= left) {
        ast[right - 1] = '*';
        ast[left - 1] = '*';
        right += 1;
        left -= 1;
        let string = ast.toString();
        let result = string.replace(/,/g, '');
        console.log(result);
    }
}