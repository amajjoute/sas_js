let personne = {
	name: "Milas",
	lastName: "Milas",
	age: 24
};

for (let per in personne) {
	console.log(`${per} : ${personne[per]}`);
}
