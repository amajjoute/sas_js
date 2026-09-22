let rectangle = {
	longueur: 6, 
	largeur: 7
};

function air(len, larg) {
	let result = len * larg;
	return (result);
}

console.log(`Air: ${air(rectangle.longueur, rectangle.largeur)}m²`);
