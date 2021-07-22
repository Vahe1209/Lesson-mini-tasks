// 3. Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

function validForNumbers(number) {
  let string = number.toString();
  let message;
  if (string.includes(" ")) {
    string = string.split(" ").join("");
  }
  if (string.length < 10) {
    message = "This is bad number";
  }
  if (string.length === 11 && string[0] === "+") {
    message = string.substring(1).trim();
  }
  if (string.includes("+") && string[0] !== "+") {
    message = "This is bad number";
  }
  if (/[+]+/.test(string) && string[0] !== "+") {
    message = "This is bad number";
  }
  if (string.length > 11) {
    message = "This is bad number";
  }
  if (!Number.isNaN(string) && string.length === 10) {
    message = "This is good number";
  }
  return message;
}
console.log(validForNumbers(+37494462806));
