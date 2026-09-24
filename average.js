const prompt  = require("prompt-sync")();

let arr = [3, 66, 7, 99, 80, 44, 4, 33, 17];
let num = parseInt(prompt("num : "));
let close = arr[0];
let i = 1;

while (i < arr.length) {
	let diff;
	if (arr[i] > num) {
		diff = arr[i] - num;
	} else {
		diff = num - arr[i];
	}

	let closeDiff;
	if (close > num) {
		closeDiff = close - num;
	} else {
		closeDiff = num - close;
	}

	if (diff < closeDiff) {
		close = arr[i];
	}
	i++;
}
console.log(close);
