// Write function that will group by some rule

let groupBy = (arr, func) => {
  let arrKeys = [];
  let sum = 0;
  arr.forEach((element) => {
    arrKeys.push(func(element));
  });
  let obj = arrKeys.reduce((a, b) => {
    if (!a.hasOwnProperty(arrKeys[sum])) {
      a[b] = [arr[sum++]];
    } else {
      a[b].push(arr[sum++]);
    }
    return a;
  }, {});
  return obj;
};
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(["one", "two", "three"], (i) => i.length));
// => { '3': ['one', 'two'], '5': ['three'] }
