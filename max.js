let arr = [3, 66, 7, 99, 80, 44, 4, 33, 17];
let i = 0;
let max = arr[0];

while (i < arr.length) {
        if (arr[i] > max) {
                max = arr[i];
        }
        i++;
}
console.log(max)
