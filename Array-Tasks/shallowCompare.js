// 17. Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
  obj1 = {
    a: 1,
    b: 2,
  };
  obj2 = {
    a: 1,
    b: 2,
  };
  let areCompare = true;
  for (let i of Object.keys(obj1)) {
    if (Object.keys(obj1)[i] !== Object.keys(obj2)[i]) {
      areCompare = false;
    }
  }
  for (let j = 0; j < Object.values(obj1).length; j++) {
    if (Object.values(obj1)[j] !== Object.values(obj2)[j]) {
      areCompare = false;
    }
  }
  return areCompare;
}

console.log(shallowCompare());
