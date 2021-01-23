//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));
