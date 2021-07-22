// 4. Given a word and a list of possible anagrams, select the correct sublist.

let word = "listen";
let arrayWords = ["enlists", "google", "inlets", "banana"];
function anagramWords() {
  let arrAnagramWords = [];
  let sortedWord = word.split("");
  for (let word of arrayWords) {
    if (sortedWord.sort().join() === word.split("").sort().join()) {
      arrAnagramWords.push(word);
    }
  }
  return arrAnagramWords;
}
console.log(anagramWords());
