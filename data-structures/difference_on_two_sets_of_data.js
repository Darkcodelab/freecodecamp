//Question - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-difference-on-two-sets-of-data

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
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach((value) => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    });

    return newSet;
  }
  difference(set) {
    let newSet = new Set();
    this.values().forEach((e) => {
      if (set.dictionary[e] == undefined) {
        newSet.add(e);
      }
    });

    return newSet;
  }
}
