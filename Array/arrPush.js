//3 Takes two arrays and insert the second array in the middle of the first array. The first array always has two elements.

let array1 = [1, 10];
let array2 = [2, 3, 4, 5, 6, 7, 8, 9];
function arrPush(arr1, arr2) {
  let arr = [];
  for (i of arr1) {
    arr.push(i);
  }
  for (j of arr2) {
    arr.push(j);
  }
  return arr.sort((a, b) => a - b);
}
console.log(arrPush(array1, array2));
