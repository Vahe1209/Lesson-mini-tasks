// 2. Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation.

function arrayOperation(array, symbol) {
  let result;
  switch (symbol) {
    case "+":
      result = array.reduce((a, b) => a + b);
      break;
    case "-":
      result = array.reduce((a, b) => a - b);
      break;
    case "/":
      result = array.reduce((a, b) => a / b);
      break;
    case "*":
      result = array.reduce((a, b) => a * b);
      break;
    default:
      result = "Give symbol";
  }
  return result;
}
console.log(arrOperation([1, 2, 3, 4, 5], "+"));
