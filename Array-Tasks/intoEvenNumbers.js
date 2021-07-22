// 11. Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the number is even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

function findEvenNumbers(number1, number2) {
  let num1 = number1.toString();
  let num2 = number2.toString();
  let result = [];
  if (/[13579]+/g.test(num1) && /[13579]+/g.test(num2)) {
    return "Such numbers doesn't exist";
  }
  for (let i = number1; i <= number2; i++) {
    if (!/[13579]+/g.test(i.toString())) {
      result.push(i);
    }
  }
  return result.join(",");
}
console.log(findEvenNumbers(19, 42));
