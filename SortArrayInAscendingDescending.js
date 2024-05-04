//ascending
let arr = [5, 2, 1, 3, 4];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5]

//Descending
let arr = [5, 2, 1, 3, 4];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 3, 4, 5]