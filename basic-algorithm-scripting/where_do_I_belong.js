//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

console.log(getIndexToIns([2, 20, 10], 19));
