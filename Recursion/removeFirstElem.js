// 4. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.shift())

function removeFirstElem(arr) {
  let n = arr.length - 1;
  let newArr = [];
  if (n === 1 || n === 0) {
    return newArr;
  }
  function foo(arr) {
    if (n === 0) {
      return newArr;
    }
    newArr.push(arr[arr.length - n]);
    n -= 1;
    return foo(arr);
  }

  return foo(arr);
}

console.log(removeFirstElem([6, 78, "n", 0, 1]));
