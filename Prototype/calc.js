// Create functions for the Calculator class that can do the following:
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

function Calculator(a, b) {
  this.add = (a, b) => console.log(a + b);
  this.subtract = (a, b) => console.log(a - b);
  this.multiply = (a, b) => console.log(a * b);
  this.divide = (a, b) => console.log(a / b);
}
const calculator = new Calculator();

calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
