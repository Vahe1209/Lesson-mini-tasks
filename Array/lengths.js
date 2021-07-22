// 15 Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of theirlengths.

let arr = ["anymore", "raven", "me", "communicate"];
let sum = 0;
let maxLength = arr[0].length;
let minLength = arr[0].length;
for (let i of arr) {
  if (maxLength < i.length) {
    maxLength = i.length;
  }
  if (minLength > i.length) {
    minLength = i.length;
  }
}
sum = maxLength + minLength;
console.log(sum);
