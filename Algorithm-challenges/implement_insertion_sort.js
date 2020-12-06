//Question - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

function insertionSort(arr) {
  function iSort(arr, i) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
      return iSort(arr, i - 1);
    } else {
      return arr;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    iSort(arr, i);
  }
  return arr;
}

console.log(
  insertionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92,
  ])
);
