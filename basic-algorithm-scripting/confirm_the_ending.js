//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {
  //   let len = target.length * -1;
  //   let end = str.substr(len);
  //   return end == target;
  return str.substr(target.length * -1) == target;
}

console.log(confirmEnding("Bastian", "ian"));
