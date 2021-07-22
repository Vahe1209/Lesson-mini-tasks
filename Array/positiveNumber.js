//4 Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1 )

function positiveNumber(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}
console.log(positiveNumber(5));
