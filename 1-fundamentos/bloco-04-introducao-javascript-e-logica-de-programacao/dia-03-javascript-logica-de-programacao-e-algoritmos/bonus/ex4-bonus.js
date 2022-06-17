let n = 5;
let ast = [];
number = n - (n - 1);


for(index = 1; index <= n; index += 1) {
    ast.push(' ')
} 

const div = ast.length -1 / 2;

for(i = n; i <= n && i >= 1; i -= 1){
    ast.splice(i, 1, '*');
    let string = ast.toString();
    let result = string.replace(/,/g, '');
    console.log(result);
}

for (index = 1; index <= n; index += 1) {
    ast.push('*')
    let string = ast.toString();
    let result = string.replace(/,/g, '');
    console.log(result);
}