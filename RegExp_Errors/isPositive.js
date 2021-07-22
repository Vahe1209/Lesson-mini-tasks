// Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:

let isPositive = (num) => {
  try {
    if (num < 0) {
      throw new Error("Negative Error");
    }
    if (num === 0) {
      throw new Error("Zero Error");
    }
    console.log(num);
  } catch (e) {
    console.log(e.message);
  }
};
console.log(isPositive(5));
