class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    if (typeof firstName !== "string") {
      throw new Error("Your name is not a String");
    }

    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    if (typeof lastName !== "string") {
      throw new Error("Your surname is not a String");
    }

    return this._lastName;
  }

  get gender() {
    return this._gender;
  }

  set gender(gender) {
    if (gender !== "male" || gender !== "female") {
      throw new Error("I don't know this gender");
    }

    return this._gender;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age !== "number") {
      throw new Error("Your age is not a Number");
    }

    return this._age;
  }

  toString() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old`;
  }
}

let user1 = new Person("Vahe", "Hovhannisyan", "male", 20);
console.log(user1.toString()); // Vahe Hovhannisyan, 20 years old.

class Student extends Person {
  constructor(year, fee, program) {
    this._year = year;
    this._fee = fee;
    this._program = [program];
  }

  get year() {
    return this._year;
  }

  set year(year) {
    if (typeof year !== "number") {
      throw new Error("Please enter number");
    }

    if (year > 10) {
      throw new Error("Please enter number <= 10");
    }

    return this._year;
  }

  get fee() {
    return this._fee;
  }

  set fee(fee) {
    if (typeof fee !== "number") {
      throw new Error("Please enter number");
    }

    return this._fee;
  }

  get program() {
    return this._program;
  }

  set program(program) {
    if (!Array.isArray(program)) {
      throw new Error("Please enter number");
    }
    return this._program;
  }

  passExam(programName, grade) {
    let falseExam = [];
    this._program.forEach((element) => {
      if (!(element.grade !== 10)) {
        falseExam.push(element.programName, element.grade);
      }
    });
    return falseExam;
  }

  isAllPassed() {
    let passed = this._program.reduce((a, b) => a + b);
    if (passed >= 50) {
      return true;
    } else {
      return false;
    }
  }
}
