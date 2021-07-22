//1 Enter a number. Find the difference between its biggest and smallest digits.
let num = 1459;
let str = num.toString();
let arr = [];
for (let i of str) {
  arr.push(i);
}
arr.sort();
let sum = arr[arr.length - 1] - arr[0];
console.log(sum);
