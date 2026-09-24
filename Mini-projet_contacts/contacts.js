const prompt = require("prompt-sync")();

//1) add contact to the list with name, phone number, email.
let nom = prompt("Entrer votre nom : ");
let num = prompt("Entrer votre numero de telephone : ");
let email = prompt("Entrer votre e-mail : ");

let contact = {
	nom: nom,
	num: num,
	email: email
};

let list = [contact];
console.log(`contact: ${contact}`);
console.log(`list: ${list}`);

//2) modified an existant contact
let existantNom = prompt("Entrer le nom du contact que vous voulez modifiez : ");
if (existantNom === nom) {
	let newNum = prompt("Entrer le new nombre: ");
	let newEmail = prompt("Entrer le new email: ");

	contact.num = newNum;
	contact.email = newEmail;
}
console.log(`contact: ${contact}`);
console.log(`list: ${list}`);

//3) delete an existant contact
let nameToDelete = prompt("Entrer le nom que vous voulez supprimer: ")
if (nameToDelete === nom) {
	delete list[contact];
}

console.log(`contact: ${contact}`);
console.log(`list: ${list}`);
