// Write functions that will return head and tail of Array

let getHead = (arr) => arr[0];
let getTail = (arr) => {
  let [, , ...result] = [arr[0], ...arr];
  return result;
};

console.log(getHead([1, 2, 3]));
console.log(getTail([1, 2, 3]));
