// 9. Write a function which receives an array and a number as arguments and returns a new array from the
// elements of the given array which are largerthan the given number.

function findHigherNumbers(arr, num) {
  let highNumberArray = [];
  for (let i of arr) {
    if (i > num) {
      highNumberArray.push(i);
    }
  }
  return highNumberArray;
}

console.log(findHigherNumbers([10, 25, 16, -5, 30, 15, 24], 16));
