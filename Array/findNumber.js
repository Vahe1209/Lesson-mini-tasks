//16 Given an array of numbers and a number. Find the index of a first element which is equal to that number.
//If there is not such a number, that find the index of the first element which is the closest to it.

function findNumber(arr, num) {
  arr = [21, -9, 15, 2116, -71, 33];
  num = 5;
  let sum = num - arr[0];
  let lastNum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    } else {
      if (Math.abs(num - arr[i]) - Math.abs(sum) < 0) {
        sum = Math.abs(num - arr[i]);
        lastNum = arr[i];
      }
    }
  }
  return arr.indexOf(lastNum);
}
console.log(findNumber());
