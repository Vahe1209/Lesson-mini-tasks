// 19 Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

let arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let sumArr = [];
let sum = 0;
for (let i of arr) {
  for (let j of i) {
    sum += j;
  }
  sumArr.push(sum);
  sum = 0;
}
console.log(sumArr);
