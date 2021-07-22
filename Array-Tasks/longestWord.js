// 8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
// string. If there are several words which are the longest ones, print the last word(words can be separated
//     by space, comma or hyphen).

function findLongestWord(str) {
  let arr = str.split(" ");
  let maxLength = arr[0];
  for (let i of arr) {
    if (i.length >= maxLength.length) {
      maxLength = i;
    }
  }
  return maxLength;
}

console.log(
  findLongestWord(
    "A revolution without dancing is a revolution not worth having."
  )
);
