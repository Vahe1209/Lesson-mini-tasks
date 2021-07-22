//4 Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message.

let num = 21;

if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log(num + " is a multiple of 3, 5 and 7.");
} else if (num % 3 === 0 && num % 7 === 0) {
  console.log(num + " is a multiple of 3 and 7.");
} else if (num % 5 === 0 && num % 7 === 0) {
  console.log(num + " is a multiple of 5 and 7.");
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log(num + " is a multiple of 3 and 5.");
} else if (num % 3 === 0) {
  console.log(num + " is a multiple of 3.");
} else if (num % 5 === 0) {
  console.log(num + " is a multiple of 5.");
} else if (num % 7 === 0) {
  console.log(num + " is a multiple of 7.");
} else {
  console.log(num + " is not a multiple of 3, 5 or 7.");
}

//5 Given three numbers. Sort them by the ascending order.

let arr = [45, 26, 18];
let arr1 = arr.sort((a, b) => a - b);
console.log(arr1);

//6 Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let num1 = 15;
let num2 = 95;
let num3 = -5;
if (num1 === 0 || num2 === 0 || num3 === 0) {
  console.log("unsigned");
} else {
  if (num1 < 0 && num2 < 0 && num3 < 0) {
    console.log("-");
  } else if (
    (num1 > 0 && num2 < 0 && num3 < 0) ||
    (num1 < 0 && num2 < 0 && num3 > 0) ||
    (num1 > 0 && num2 > 0 && num3 < 0)
  ) {
    console.log("+");
  } else if (
    (num1 > 0 && num2 > 0 && num3 < 0) ||
    (num1 > 0 && num2 < 0 && num3 > 0) ||
    (num1 < 0 && num2 > 0 && num3 > 0)
  ) {
    console.log("-");
  } else if (num1 > 0 && num2 > 0 && num3 > 0) {
    console.log("+");
  }
}
