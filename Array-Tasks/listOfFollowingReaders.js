// 16. Given the list of the following readers:

function giveListFollowingReaders(arr) {
  let booksArr = [];
  for (let index of arr) {
    if (index.readStatus) {
      booksArr.push(index);
    }
  }
  return booksArr.sort((a, b) => b.percent - a.percent);
}

console.log(
  giveListFollowingReaders([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
  ])
);
