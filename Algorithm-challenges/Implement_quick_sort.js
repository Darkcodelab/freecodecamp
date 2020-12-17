//Question - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

function quickSort(array) {
  if (array.length <= 1) return array;
  if (array.length == 2) {
    if (array[1] > array[0]) {
      let temp = array[1];
      array[1] = array[0];
      array[0] = temp;
    }
    return array;
  }
  let pivot = Math.max(...array);
  let arr1 = [],
    arr2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      arr1.push(array[i]);
    } else {
      arr2.push(array[i]);
    }
  }
  return quickSort(arr1).concat(quickSort(arr2));
}

console.log(
  quickSort([
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
