//7 Insert a digit and a number. Check whether the digits contains in the number or not.

num = 2563;
haveNum = 5;
let one = parseInt(num / 1000);
let two = parseInt(num / 100) - one * 10;
let four = num % 10;
let three = ((num % 100) - four) / 10;
if (one / 5 === 1) {
  console.log("yes");
} else if (two / 5 === 1) {
  console.log("yes");
} else if (three / 5 === 1) {
  console.log("yes");
} else if (four / 5 === 1) {
  console.log("yes");
} else {
  console.log("no");
}

// 8 Enter a number. Reverse its first and last digits. Print the new number.

let number = 45668;
let reverseNumber = "";
str = number.toString();
let arr = [];
for (let i of str) {
  arr.push(i);
}
arr = arr.reverse();
for (let j of arr) {
  reverseNumber += j;
}
reverseNumber = +reverseNumber;
console.log(reverseNumber);

// 9 Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.

function isPrime(numPrime) {
  if (numPrime === 2) {
    return true;
  } else if (numPrime > 1) {
    for (var i = 2; i < numPrime; i++) {
      if (numPrime % i !== 0) {
        return true;
      } else if (numPrime === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

console.log(isPrime(121));
