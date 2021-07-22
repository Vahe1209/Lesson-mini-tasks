// Write a Baby constructor subclassing Person.
// Besides name and age, Baby takes a third argument to initialize favoriteToy.
// Besides the methods on Person.prototype, babies have the ability to .play():
// Should return a string "Playing with x", x being the favorite toy.

function Person({ name, age, surname, stomach = [] } = {}) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
  this.surname = surname;
  Person.count += 1;
}

Person.count = 0;

Person.prototype.eat = function (...food) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, ...food];
  } else {
    throw new Error("TOO MUCH FOOD!");
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.destroy = function () {
  Person.count -= 1;
};

Person.prototype.toString = function () {
  return `Person: ${this.name} — ${this.age}`;
};

const rawUser = { name: "Ilon", age: 44 };

const u1 = new Person(rawUser);
const u2 = new Person();

u1.eat("shawarma", "kebab", "fries", "pepper");
u1.eat("lasagna", "pasta");

console.log(u1);
console.log(u2);

function Baby(name, age, surname, favoriteToys = []) {
  Person.call(this, { name, age, surname });
  this.favoriteToys = favoriteToys;
}

Baby.prototype = Object.create(Person.prototype);

const b1 = new Baby("XAE12", 1, "Musk");

console.log(b1);

b1.eat("milk");

console.log(b1.toString());

console.log(Person.count);
