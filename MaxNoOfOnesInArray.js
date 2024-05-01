let br = [[1, 0, 1], [1, 1, 0], [0, 0, 1], [1, 1, 1]];
let ar = [];

for (let i = 0; i < br.length; i++) {
  let count = 0;
  for (let j = 0; j < br[i].length; j++) {
    if (br[i][j] === 1) {
      count++;
    }
  }
  ar.push(count);
}

let max = ar.indexOf(Math.max(...ar));
console.log("row " + max + " has the maximum number of 1");