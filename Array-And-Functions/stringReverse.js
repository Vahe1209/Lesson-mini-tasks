// 10. Check whether string is palindrome, or not.

const strReverse = (str) => {
  let newStrArr = str.split("");
  if (newStrArr === newStrArr.reverse()) {
    return true;
  } else {
    return false;
  }
};

word = "bob";
console.log(strReverse(word));
