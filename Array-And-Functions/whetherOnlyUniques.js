// 7. Given an array. Determine whether it consists only from uniques or not.

const whetherOnlyUniques = (arr) => {
  let newSet = new Set(arr);
  if (newSet.size === arr.length) {
    return "uniques";
  } else {
    return "not";
  }
};

let arrNumbers = [1, 2, 3, 5, 7, 5, 6, 1];
console.log(whetherOnlyUniques(arrNumbers));
