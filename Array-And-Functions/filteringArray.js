// 5. Write a function that implements filtering in array

const filterFalsyValues = (arr) => {
  let newArr = [];
  for (let value of arr) {
    if (value) {
      newArr.push(value);
    }
  }
  return newArr;
};

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values));
