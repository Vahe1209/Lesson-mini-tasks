if (!Array.prototype.myEvery) {
  Array.prototype.myEvery = function (callBack) {
    if (typeof callBack !== "function") {
      throw new TypeError(callBack + "is not a function");
    }
    let array = this;
    let result = [];
    for (let index = 0; index < array.length; index++) {
      if (callBack(array[index], index, array)) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return !result.includes(false);
  };
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myEvery((item) => item > 40));
