function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));
  console.log(s);
}
reverseString("String");
