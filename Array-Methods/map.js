if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callBack) {
    if (typeof callBack !== "function") {
      throw new TypeError(callBack + "is not a function");
    }
    let array = this;
    let result = [];
    for (let index = 0; index < array.length; index++) {
      if (callBack(array[index], index, array)) {
        let mappedValue = callBack(array[index], index, array);

        result[index] = mappedValue;
      }
    }
    return result ?? undefined;
  };
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myMap((item) => item * 3));
