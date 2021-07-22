// 7. Write a function to compute a new string from the given one by moving the first char to come after the
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewer than 3 chars at the end.

function mixerWords(str) {
  let arr = str.split("");
  str = "";
  let arrClone = [...arr];
  let newArr = [];
  let lastArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    newArr = [];
    newArr = arr.slice(i, i + 3);
    arr = [...arrClone];
    newArr.push(newArr[0]);
    newArr.shift();
    lastArr.push(newArr);
  }
  for (let j of lastArr.join().split(",")) {
    str += j;
  }
  return str;
}

console.log(mixerWords("123456789"));
