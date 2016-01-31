'use strict';

class Player {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello I'm 456 ${this.name}`;
  }
}

export { Player };
