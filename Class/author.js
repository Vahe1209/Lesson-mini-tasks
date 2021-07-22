class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== "string") {
      throw new Error("Name is not a String!!!");
    }
    return this.name;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.test(regex)) {
      return this.email;
    }
  }

  get gender() {
    return this._gender.toLowerCase();
  }

  set gender(gender) {
    if (gender === "male" || gender === "female") {
      return this.gender;
    } else {
      throw new Error("I don't know this gender");
    }
  }

  toString() {
    if (this.gender === "male") {
      return `Mr + ${this.name}`;
    } else if (this.gender === "female") {
      return `Ms + ${this.name}`;
    }
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._price = price;
    this._quantity = quantity;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof title !== "string") {
      throw new Error("Title is not a String");
    }

    return this._title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof author !== "string") {
      throw new Error("Author is not a name");
    }

    return this._author;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    if (typeof price !== "number") {
      throw new Error("price is not a number");
    }

    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity) {
    if (typeof quantity !== "number") {
      throw new Error("quantity is not a number");
    }

    return this._quantity;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
// author.name = 12; // throws error
