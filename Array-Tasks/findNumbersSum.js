//5. Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

function receiveNum(string) {
  let result = [];
  if (/([0-9])+/g.test(string)) {
    result = string.match(/([0-9])+/g);
  }
  let numArray = result.map((item) => Number(item));
  let sum = 0;
  for (let i of numArray) {
    sum += i;
  }
  return sum;
}
console.log(receiveNum("FwrtY45KHL120mn10P"));
