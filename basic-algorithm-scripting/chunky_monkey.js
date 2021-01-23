//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
  let dupArr = [];
  while (arr.length > 0) {
    dupArr.push(arr.splice(0, size));
  }
  return dupArr.filter((e) => e.length >= 1);
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
