// 4. Create a function printAfter that calls its argument after printing hello world

const print = () => {
  console.log("Elon Musk");
};

const printAfter = (str) => {
  console.log("hello, world");
  return str;
};

let f1 = printAfter(print);
f1();
