// 6. Write a function which remove elements with length <= 3

const filterByLength = (arr) => {
  let newArr = [];
  for (let car of arr) {
    if (car.length > 3) {
      newArr.push(car);
    }
  }
  return newArr;
};

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
