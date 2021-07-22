// 8. Determine if a word or phrase is an iso gram. An iso gram (also known as a "non pattern word") is a word or phrase without a repeating letter

const isoGram = (str) => {
  let newStr = str.split("");
  let newSet = new Set(newStr);
  if (newSet.size === str.length) {
    return true;
  } else {
    return false;
  }
};

let name = "Pater";
console.log(isoGram(name));
