// 6. Write a function which receives two strings and removes appearances of the second string from the first one.

function removeWords(str, word) {
  return str.split(`${word}`).join("");
}

console.log(
  removeWords(
    "Yes, London. You know: fish, chips, cup ‘o tea, bad" +
      "food, worse weather",
    "o"
  )
);
