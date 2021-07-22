const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
let getUserNames = (arr) => {
  return arr.map((item) => item.username);
};

let getUsernameLengths = (arr) => {
  return arr.map((item) => item.username.length);
};

console.log(getUsernameLengths(users));
console.log(getUserNames(users));
