let arr = [3, 66, 7, 99, 80, 44, 4, 33, 17];
let num = 5;
let i = 0;
let max = arr[0];
let min = arr[0];

while (i < arr.length) {
	if (arr[i] > max) {
		max = arr[i];
	}
	if (arr[i] < min) {
		min = arr[i];
	}
	i++;
}

