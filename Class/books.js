function checkIfBookExist(bookList = [], { author, title }) {
  let res = [];
  bookList.forEach((book) => {
    if (book.author === author && book.title === title && book.quantity > 0) {
      res.push(true);
    }
  });
  return res.includes(true) ? true : false;
}

function checkIfReaderExist(readersList, readerId) {
  let res = [];
  readersList.forEach((r = {}) => {
    const { _, __, id } = r;
    if (id === readerId) {
      res.push(true);
    }
  });
  return res.includes(true) ? true : false;
}

class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
    this.isTheSameBook = function (book) {
      if (book.prototype === this.prototype) {
        return book.title === this.title && book.author === this.author
          ? true
          : false;
      } else {
        return false;
      }
    };
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof title !== "string") {
      throw new Error("Enter normal Title");
    }

    return this._title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof author !== "string") {
      throw new Error("Please enter Author name");
    }

    return this._author;
  }

  toString() {
    return `${this._author}'s ${this._title}`;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this._bookId = this.counter();
  }
  counter() {
    LibraryBookBase._counter = (LibraryBookBase._counter || 0) + 1;
    return LibraryBookBase._counter;
  }

  get bookId() {
    return this._bookId;
  }

  set bookId(bookId) {
    if (typeof bookId !== "number") {
      throw new Error("We haven't this id");
    }

    return this._bookId;
  }
}

class LibraryBook extends Book {
  constructor(title, author, bookId, quantity) {
    super(title, author);
    this._bookId = bookId;
    this.increaseQuantityBy = function (amount) {
      this.quantity += amount;
      return this.quantity;
    };
    this.decreaseQuantityBy = function (amount) {
      this.quantity -= amount;
      return this.quantity;
    };
  }

  get bookId() {
    return this._bookId;
  }

  set bookId(bookId) {
    if (typeof bookId !== "number") {
      throw new Error("We haven't this bookId");
    }

    return this._bookId;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity) {
    if (typeof quantity !== "number") {
      throw new Error("We haven't this quantity");
    }

    return this._quantity;
  }
}

class ReaderBook extends Book {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author);
    this._bookId = bookId;
    this._expirationDate = expirationDate;
    this.isReturned = function () {
      if (checkIfBookExist(LibraryBookBase, this.author, this.title)) {
        return true;
      } else {
        return false;
      }
    };
  }
  get bookId() {
    return this._bookId;
  }

  set bookId(bookId) {
    if (typeof bookId !== "number") {
      throw new Error("This isn't a number");
    }

    return this._bookId;
  }
}

class Reader {
  constructor(firstName, lastName, books = []) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._books = books;
    this._readerId = this.counter();
    this.toString = function () {
      return `Reader: ${this.firstName} ${this.lastName}`;
    };
    this.borrowBook = function (book, library) {
      if (
        checkIfBookExist(library, book) &&
        book.__proto__ === ReaderBook.prototype
      ) {
        // push to books list
        this.books = book;
        library.books.forEach((b) => {
          if (b.author === book.author && b.title === book.title) {
            // get 1 book from list
            b.decreaseQuantityBy(1);
          }
        });
      }
    };
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get books() {
    return this._books;
  }
  get readerId() {
    return this._readerId;
  }
  set books(book) {
    this._books.push(book);
    return this._books;
  }
  counter() {
    Reader._counter = (Reader._counter || 0) + 1;
    return Reader._counter;
  }
}

class Library {
  constructor(books = [], readers = []) {
    this._books = books;
    this._readers = readers;
    // check if we have book in library
    this.doHaveBook = function (book = {}) {
      // return true / false
      return checkIfBookExist(this.books, book);
    };
    this.addBook = function (book = {}) {
      if (checkIfBookExist(this.books, book)) {
        this.books.forEach((b) => {
          if (b.author === book.author && b.title === book.title) {
            b.increaseQuantityBy(1);
          }
        });
      } else {
        let libBook = new LibraryBook(book.author, book.title, 1);
        // push book to library
        this.books = libBook;
      }
    };
    this.checkReaderId = function (readerId) {
      let res = [];
      this.readers.forEach((reader) => {
        if (reader.readerId === readerId) {
          res.push(true);
        }
      });
      return res.includes(true) ? true : false;
    };
    this.lendBook = function (book, readerId) {
      if (
        checkIfBookExist(this.books, book) &&
        checkIfReaderExist(this.readers, readerId)
      ) {
        return this.books.find((b) => {
          let { author, title } = b;
          return author === book.author && title === book.title;
        });
      }
    };
  }
  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
  set books(book = {}) {
    this._books.push(book);
  }
}
