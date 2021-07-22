// Write function that will zip arrays into object

const zipObject = (arr1, arr2) => {
  let sum = 0;
  let obj = arr1.reduce((a, b) => {
    if (arr2[sum] === undefined) {
      arr2[sum] = null;
    }
    a[b] = arr2[sum++];

    return a;
  }, {});
  return obj;
};

console.log(zipObject(["a", "b", "c"], [1, 2]));
