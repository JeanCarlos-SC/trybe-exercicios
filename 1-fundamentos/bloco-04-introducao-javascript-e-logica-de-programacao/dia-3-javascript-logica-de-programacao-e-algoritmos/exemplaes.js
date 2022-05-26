let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: { 
    golden: 2, 
    silver: 3 
}
}

console.log('A jogadora ' +player.name + ' ' +player.lastName + ' tem ' + player.age + ' anos de idade.');
console.log(" ");
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes:");
console.log(player['bestInTheWorld']);
console.log(" ");
console.log("A jogadora possui 2 medalhas de ouro e 3 medalhas de prata");
console.log(player.medals);
