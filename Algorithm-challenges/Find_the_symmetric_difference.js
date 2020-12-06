//Question - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

function sym() {
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  function diff(arr1, arr2) {
    let result = [];

    arr1.forEach((e) => {
      if (arr2.indexOf(e) < 0) {
        result.push(e);
      }
    });
    arr2.forEach((e) => {
      if (arr1.indexOf(e) < 0) {
        result.push(e);
      }
    });
    return result;
  }
  return [...new Set(args.reduce((a, b) => diff(a, b)).sort((a, b) => a - b))];
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); //[3,4,5]
