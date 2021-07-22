function toFloat(num) {
  num = num.toString();
  let arr;
  arr = num.split("");
  let isFirstZero = true;
  while (isFirstZero) {
    if (Number(arr[0]) === 0) {
      arr.shift();
    } else {
      isFirstZero = false;
    }
  }
  num = "";
  let bool = true;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isNaN(+arr[i])) {
      num += arr[i];
    } else if (arr[i] === "." && bool) {
      if (!Number.isNaN(+arr[i + 1])) {
        num += arr[i];
      }
      bool = false;
    } else {
      break;
    }
  }
  return num;
}
console.log(toFloat("0123.015a0sfg0s"));
