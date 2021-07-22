function sortBy(arr, str = "") {
  if ((str = "")) {
    return arr.sort((a, b) => b - a);
  } else {
    return arr.sort((a, b) => a - b);
  }
}
console.log(
  sortBy([4, 3, 2, 1], "Asc"),
  sortBy([7, 8, 11, 66]),
  sortBy([7, 8, 11, 66], "Desc")
);
