// 1. Write a recursive function to determine whether all digits of the number are odd or not.

function evenOrOdd(num) {
  num = `${num}`;
  num = num.split("");
  let [first, ...rest] = num;
  if (first % 2 !== 0) {
    if (rest.length !== 0) {
      return evenOrOdd(+rest.join(""));
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(evenOrOdd(113355));
