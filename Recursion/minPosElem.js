// 2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1).

function minPosElem(arr) {
  if (arr.length < 2) {
    return arr[0];
  }
  let positiveNumbers = arr.filter((elem) => elem >= 0);

  let [first, ...rest] = positiveNumbers;
  if (positiveNumbers.length > 0) {
    return Math.min(first, minPosElem(rest));
  } else {
    return -1;
  }
}

console.log(minPosElem([-45, -9, -15, -5, -78]));
