if (!Array.prototype.myFindIndex) {
  Array.prototype.myFindIndex = function (callBack) {
    if (typeof callBack !== "function") {
      throw new TypeError(callBack + "is not a function");
    }
    let array = this;
    let result;
    for (let index = 0; index < array.length; index++) {
      if (callBack(array[index], index, array)) {
        result = index;
      }
    }
    return result ?? -1;
  };
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myFindIndex((item) => item === 9));
