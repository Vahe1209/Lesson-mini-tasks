// Write Pagination object that will get an array and pageSize, then will return the following.

let newArr = [];
let fakeArr = [];
let countPages = 0;
let Pagination = {
  init: (arr, size) => {
    for (let i = 1; i <= arr.length; i++) {
      fakeArr.push(arr[i - 1]);
      if (i % size === 0) {
        newArr.push(fakeArr);
        fakeArr = [];
      }
    }
  },
  nextPage: () => {
    countPages++;
  },
  prevPage: () => {
    countPages--;
  },
  firstPage: () => {
    countPages = 0;
  },
  goToPage: (num) => {
    countPages = num - 1;
  },
  getPageItems: () => console.log(newArr[countPages]),
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.goToPage(3); // current page must be set to 3
// Pagination.nextPage().nextPage(); //
