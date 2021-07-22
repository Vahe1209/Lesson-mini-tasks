// 6. Given an array and a number N. Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

function sortThisArray(arr, num, counter = 0) {
  if (counter === arr.length - num) return arr;
  arr.unshift(arr.pop(arr[arr.length - counter]));
  counter++;
  return sortThisArray(arr, num, counter);
}

console.log(sortThisArray(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
