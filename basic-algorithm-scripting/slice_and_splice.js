//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

function frankenSplice(arr1, arr2, n) {
  let dupArr = arr2.slice();
  dupArr.splice(n, 0, ...arr1);
  return dupArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
