//Question - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data

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
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }

  intersection(set) {
    let newSet = new Set();
    let larger, small;
    if (Object.keys(this.dictionary).length > Object.keys(set).length) {
      larger = this;
      small = set;
    } else {
      larget = set;
      small = this;
    }

    small.values().forEach((e) => {
      if (larger.dictionary[e] !== undefined) {
        newSet.add(e);
      }
    });
    return newSet;
  }
}
