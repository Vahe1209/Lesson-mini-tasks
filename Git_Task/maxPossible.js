function maxPossible(num1, num2) {
  let numbers1 = `${num1}`.split("");
  let sortedNumbers2 = `${num2}`.split("").sort((a, b) => b - a);
  for (let i = 0; i < numbers1.length; i++) {
    if (sortedNumbers2[0] > numbers1[i]) {
      numbers1[i] = sortedNumbers2.shift();
    }
  }
  return +numbers1.join("");
}
