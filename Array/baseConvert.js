//2 Convert base-2 number to base-10
function baseConvert(num) {
  let number = "0b" + num;
  return +number;
}
console.log(baseConvert(10010));
