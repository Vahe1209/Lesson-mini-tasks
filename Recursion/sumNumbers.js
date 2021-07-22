//7. Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumNumbers(num) {
  let arr = `${num}`.split("");
  let sum = arr.reduce((a, b) => +a + +b);
  if (sum < 10) {
    return sum;
  } else {
    return sumNumbers(sum);
  }
}

console.log(sumNumbers(123));
