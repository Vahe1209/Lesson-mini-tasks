function toInt(num, bin = 10) {
  if (typeof num !== "string") {
    num = num.toString();
  }
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
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isNaN(+arr[i])) {
      num += arr[i];
    } else {
      break;
    }
  }
  function dec2Bin(dec) {
    if (dec >= 0) {
      return dec.toString(bin);
    } else {
      return (~dec).toString(bin);
    }
  }
  return dec2Bin(+num);
}
console.log(toInt("000155gdbajvajk", 16));
