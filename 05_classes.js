class Person {
  static type = 'Human';
  static #area = 'EARTH';
  name = 'vova'; // new syntax
  #year = 1993; // private field

  constructor(name) {
    this.name = name;
  }

  get age() {
    return new Date().getFullYear() - this.#year
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age;
    }
  }

  static printArea() {
    return Person.#area === 'EARTH' ? 'Земля' : 'Марс';
  }

}

const person = new Person('Max');
console.log(person.name); // => Max
console.log(person.age); // => 27
person.age = 26; // => 27
console.log(person.age); // => 26
console.log(Person.type); // => Human
console.log(Person.printArea()); // => EARTH