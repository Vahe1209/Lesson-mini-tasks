if (!Array.prototype.mySplice) {
  Array.prototype.mySplice = function (start, len, ...items) {
    let array = this;
    let result = [];
    let item = [];
    item.push(...items);
    let deleted = [];
    for (index = 0; index < array.length; index++) {
      if (index >= start && index < start + len) {
        deleted.push(array[index]);
      }
      if (item.length === 0) {
        if (index < start || index >= start + len) {
          result.push(array[index]);
        }
      } else {
        if (index < start) {
          result.push(array[index]);
        } else if (index === start + 1) {
          result.push(...items);
          continue;
        } else if (index >= start + len) {
          result.push(array[index]);
        }
      }
    }
    this.length = result.length;
    for (let i = 0; i < result.length; i++) {
      this[i] = result[i];
    }
    return deleted;
  };
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.mySplice(1, 3, 9, 15));
console.log(arr);
