if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (callBack) {
    if (typeof callBack !== "function") {
      throw new TypeError(callBack + "is not a function");
    }
    let array = this;
    let result;
    for (let index = 0; index < array.length; index++) {
      if (callBack(array[index], index, array)) {
        result = array[index];
      }
    }
    return result;
  };
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myFind((item) => item === 5));
