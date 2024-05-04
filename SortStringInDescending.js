//sort string in descending 
let sortStringDescending = (stringg) => {
    return stringg.split("").sort((a, b) => b.localeCompare(a)).join("");
};

console.log("Sorted String (Descending): ");
console.log(sortStringDescending("ecdab"));