//print 1 if array is  sorted order(ascending)
//Print 0 if array is unsorted order 
function check(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return 0;
        }
    }
    return 1;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 4, 3, 2, 1];

console.log(check(array1)); // Output: 1
console.log(check(array2)); // Output: 0