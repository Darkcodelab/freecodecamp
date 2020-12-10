//Question - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class

class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      console.log(this.has(element));
      this.dictionary[element] = element;
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      return true;
    }
    return false;
  }

  size() {
    return Object.keys(this.dictionary).length;
  }
}
