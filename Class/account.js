class Account {
  constructor(name, balance, id = "") {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (this.name !== "string") {
      throw new Error("Name is not a String");
    }

    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set balance(balance) {
    if (this.balance !== "number") {
      throw new Error("Balance is not a number");
    }

    return this._balance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    return amount - this._balance;
  }

  transfer(amount) {
    this._balance -= amount;
  }

  transferTo(anotherAccount, amount) {
    this.transfer(amount);
    anotherAccount.credit(amount);
    return this._balance;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst === accountSecond;
  }

  toString() {
    return `Saving account's account balance is ${this._balance}`;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.
