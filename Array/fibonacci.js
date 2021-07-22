//10 Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)

let number = 5;
let num1 = 0,
  num2 = 1,
  nextNumber;

for (let i = 1; i <= number; i++) {
  console.log(num1);
  nextNumber = num1 + num2;
  num1 = num2;
  num2 = nextNumber;
}
