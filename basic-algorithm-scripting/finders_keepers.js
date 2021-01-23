//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let bool = func(arr[i]);
    if (bool) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
