//5 Write a program to check the validity of password input by users. Validation :

function toValid(pass) {
  if (
    /\d/.test(pass) &&
    /[a-z]/.test(pass) &&
    /[A-Z]/.test(pass) &&
    /[!@#$%^&*]/.test(pass) &&
    pass.length >= 6 &&
    pass.length <= 16
  ) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
console.log(toValid("asdfbdsvlds51$"));
