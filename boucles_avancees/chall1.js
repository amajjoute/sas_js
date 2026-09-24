const prompt = require("prompt-sync")();

const num = parseInt(prompt("Entrer votre nombre: "))
let i = 10;
let mult;

while (i > 0) {
	mult = num * i;
	console.log(`${num} * ${i} = ${mult}`);
	i--;
}

