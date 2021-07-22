//1 Given a number. Print “odd” if the number is odd and “even” if itʼs even.
//
let num = 125;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//2 Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the
//angles of a triangle equals 180 degrees).

let deg1 = 45;
let deg2 = 90;
let deg3 = 180 - deg1 - deg2;
console.log(deg3);

//3 Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
//last digit of the inserted numberis 0, numberremains the same.

let number = 5299;
let reverseNumber = "";
str = number.toString();
let arr = [];
if (number % 10 === 0) {
  reverseNumber = number;
} else {
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  arr.unshift(arr[arr.length - 1]);
  arr.length = arr.length - 1;
  for (let j = 0; j < arr.length; j++) {
    reverseNumber += arr[j];
  }
  reverseNumber = +reverseNumber;
}
console.log(reverseNumber);
