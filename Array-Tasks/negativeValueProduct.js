// 14. Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that array.
// Check that items of the given array are arrays.

function negativeValueProduct(array) {
  let result = [];
  let maxNegativeArray = [];
  let maxNegativeValue = 0;
  if (Array.isArray(array) && array.every((item) => Array.isArray(item))) {
    for (const numbers of array) {
      maxNegativeArray = numbers.filter((number) => number < 0);
      maxNegativeValue = Math.max(...maxNegativeArray);
      result.push(maxNegativeValue);
    }
  } else {
    result = "Invalid arguments";
  }
  result = result.filter((item) => item != -Infinity);
  return result.reduce((a, b) => a * b) ?? "No negatives";
}

console.log(
  negativeValueProduct([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0],
  ])
);
