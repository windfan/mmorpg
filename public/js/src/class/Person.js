'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello I'm 456 ${this.name}`;
  }
}

module.exports = Person;
