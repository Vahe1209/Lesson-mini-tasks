if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = (callBack, currentVal = 0) => {
    let array = this;
    if (typeof callBack === "function") {
      let firstIndex;
      let accumulator;
      if (typeof currentVal === "undefined") {
        accumulator = arr[0];
        firstIndex = 1;
      } else {
        accumulator = currentVal;
        firstIndex = 0;
      }
      for (let index = firstIndex; index < arr.length; index++) {
        accumulator = callBack(accumulator, arr[index], index);
      }
      return accumulator;
    }
  };
}
