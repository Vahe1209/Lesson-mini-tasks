// 13. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
// elements in the array are unique.

function arrayMixer(array) {
  return new Array(1 << array.length)
    .fill()
    .map((e1, i) => array.filter((e2, j) => i & (1 << j)));
}

console.log(arrayMixer([5, 9, 23, 0, -2, -1]).filter((a) => (a.length = 3)));
