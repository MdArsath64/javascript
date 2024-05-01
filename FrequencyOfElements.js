var arr =[ 1,4,5,6,2,2,2,4,5,
5,4,6,9, 1,2,2, 3]
// sorting the array
arr.sort()
count = 1
for(var i = 1;i<arr.length;i++){

if(arr[i] == arr[i-1]) {
count++;
}
else {
console.log("The frequency of "+arr[i-1] + " is:" + count);
count
console.log("The frequency of "+arr[arr.length-1])
count=1;
}}
console.log("The frequency of "+arr[arr.length-1]+" is :"+count);