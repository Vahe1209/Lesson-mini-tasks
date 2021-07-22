//11 Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
//print the quotient, otherwise print the remainder.

let newNumber = 156;
let str = newNumber.toString();
let sum = 0;
let count = 1;
for (let i of str) {
  sum += +i;
  count *= +i;
}
if (count % sum === 0) {
  console.log(count / sum);
} else {
  console.log(count % sum);
}

//12 Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words from the array.

let newStr = "_, we have a _.";
let yourStr = "";
let arr = ["Houston", "problem"];
let newSum = 0;
for (let i of newStr) {
  if (i === "_") {
    i = arr[newSum];
    newSum++;
  }
  yourStr += i;
}
console.log(yourStr);

//13 Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the
// evens.

let arr1 = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let arr2 = [];
for (let i of arr1) {
  if (typeof i === "number") {
    if (i % 2 === 1) {
      arr2.unshift(i);
    } else {
      arr2.push(i);
    }
  }
}
console.log(arr2);
