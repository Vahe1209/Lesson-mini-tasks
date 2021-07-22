// 3. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

function findViolatedIndex(arr) {
  function findIndex(newArr) {
    let [first, ...rest] = newArr;
    if (rest[0] < first) {
      return arr.indexOf(rest[0]);
    } else {
      if (rest.length === 0) {
        return -1;
      }
      return findIndex(rest);
    }
  }
  return findIndex(arr);
}

console.log(findViolatedIndex([2, 12, 15, 48, 64]));
