//Question - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/work-with-nodes-in-a-linked-list

let Node = (element) => {
  this.element = element;
  this.next = null;
};

let Cat = new Node("Cat");
let Dog = new Node("Dog");
let kitten = new Node("Kitten");
let Puppy = new Node("Puppy");

kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;
