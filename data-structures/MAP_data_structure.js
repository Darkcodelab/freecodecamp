//Question - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-map-data-structure

var Map = function () {
  this.collection = {};
  this.add = (key, value) => {
    this.collection[key] = value;
  };
  this.remove = (key) => delete this.collection[key];
  this.get = (key) => this.collection[key];
  this.has = (key) => this.collection[key] != undefined;
  this.values = () => [...Object.values(this.collection)];
  this.size = () => Object.keys(this.collection).length;
  this.clear = () => (this.collection = {});
};
