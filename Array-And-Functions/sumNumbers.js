// 1. Create a function that implements partial sum

function sum(num) {
  const changeSum = (sum) => (sum += num);
  return changeSum;
}
console.log(sum(5)(10));

const addOne = sum(1);
console.log(addOne(2));
const addTen = sum(10);
console.log(addTen(2));
console.log(addOne(4));
console.log(addTen(10));
