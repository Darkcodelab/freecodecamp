//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
