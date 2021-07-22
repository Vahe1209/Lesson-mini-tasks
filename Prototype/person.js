class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(person) {
    if (this.age > person.age) {
      return `${this.name} is older than me.`;
    } else if (this.age < person.age) {
      return `${this.name} is younger than me.`;
    } else {
      return `${this.name} is the same age as me.`;
    }
  }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
console.log(p1.compareAge(p2)); // "Joel is older than me."
console.log(p2.compareAge(p1)); // "Samuel is younger than me."
console.log(p1.compareAge(p3)); // "Lily is the same age as me."
