//20 Print the following pattern:
//
//     [1],
//     [2, 6],
//     [3, 7, 10],
//     [4, 8, 11, 13],
//     [5, 9, 12, 14, 15]
//
let arr = [];
let count = 1;
for (let i = 1; i <= 5; i++) {
  arr.push([count]);
  count += 1;
}
for (let j of arr) {
  if (j.length >= 1 && j[0] > j.length) {
    j.push(count);
    count += 1;
    if (j.length >= 2 && j[0] > j.length) {
      j.push(count);
      count += 1;
      if (j.length >= 3 && j[0] > j.length) {
        j.push(count);
        count += 1;
        if (j.length >= 4 && j[0] > j.length) {
          j.push(count);
          count += 1;
        }
      }
    }
  }
}
console.log(arr);
