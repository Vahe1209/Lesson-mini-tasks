// 9. Given an array of numbers. Find the sum of numbers quadratic which are even.

const quadraticNumbersArray = (arr) => {
  let sum = 0;
  for (let numbers of arr) {
    if (numbers ** 0.5 % 2 == 0) {
      sum += numbers;
    }
  }
  return sum;
};

let arrayQuadratic = [4, 9, 16, 25, 36, 64];
console.log(quadraticNumbersArray(arrayQuadratic));
