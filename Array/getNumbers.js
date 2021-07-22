// 18 Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a new
// array where each element from that array is placed under the index of its value. Start from the smallest
// value and end with the biggest one. If there are missing values, put in its places undefined.

let array = [4, 3, 9];
function newNumbers(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  for (let i of arr) {
    result[i - arr[0]] = i;
  }
  return result;
}
console.log(newNumbers(array));
