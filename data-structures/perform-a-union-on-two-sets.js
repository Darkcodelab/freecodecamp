//Question - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-union-on-two-sets

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
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  size() {
    return this.length;
  }

  union(anotherSet) {
    let placeholderSet = new Set();
    let addToSet = (e) => placeholderSet.add(e);
    this.values().forEach(addToSet);
    anotherSet.values().forEach(addToSet);
    return placeholderSet;
  }
}
