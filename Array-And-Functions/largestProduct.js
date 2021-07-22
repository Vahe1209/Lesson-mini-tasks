// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const largestProduct = (arr) => {
  arr = arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
};

arrNumbers = [1, 2, 3, 5, 9];
console.log(largestProduct(arrNumbers));
