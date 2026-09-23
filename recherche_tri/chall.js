function sort(arr) {
	let swp;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swp;
			}		
		}
	}
	return (arr);
}

function binarySearch(arr, srch) {
	let low = 0;
	let high = arr.length - 1;
	let mid;

	while (high >= low) {
		mid = low + Math.floor((high - low) / 2);

		if (arr[mid] == srch) {
			return (mid);
		}

		if (arr[mid] > srch) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return (-1);
}

let arr = [19, 12, 9, 66, 44, 20, 32, 4];
let srch = 44;

sort(arr);
//console.log(arr);

let result = binarySearch(arr, srch);

if (result == -1) {
	console.log("Votre nombre n'est pas trouver!")
}else {
	console.log(`Le nombre que vous cherche est dans le index : ${result}`);
}
