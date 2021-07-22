// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let arr = [45, 12, 3, 6, 17, 0];
let arrOdd = [];
let arrEven = [];
for (let i of arr) {
  if (i % 2 === 0) {
    arrEven.push(i);
  } else {
    arrOdd.push(i);
  }
}
console.log(arrOdd, arrEven);
