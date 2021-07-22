//14 Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

let arr = [1, "10", "hi", 2, 3];
let int = 0;
let str = 0;
for (let i of arr) {
  if (typeof i === "number") {
    int += 1;
  } else if (typeof i === "string") {
    str += 1;
  }
}
console.log(int + " Numbers and " + str + " Strings");
