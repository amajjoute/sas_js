let livre = {
	titre: "",
	auteur: "",
	anne: 0
}

function donnees(titre, auteur, anne) {
	livre.titre = titre;
	livre.auteur = auteur;
	livre.anne = anne
}

donnees("hello", "milas", 2002);
console.log(livre)

console.log(`Titre: ${livre.titre}, Auteur: ${livre.auteur}, Anne: ${livre.anne}`);
