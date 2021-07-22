// 2. Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = (str) => {
  const consumer = () => str;
  return consumer;
};

const f1 = redundant("apple");
console.log(f1());
