// 3. Write function that returns an anonymous function, which transforms its input by adding a particular
// ly at the end.

const add_suffix = (add) => {
  const newSuffix = (str) => {
    return str + add;
  };
  return newSuffix;
};

let add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));
