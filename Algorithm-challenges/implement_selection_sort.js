//Question - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(i);
    let minValue = Math.min(...newArr);
    let minIndex = arr.lastIndexOf(minValue);
    let temp = arr[i];
    arr[i] = minValue;
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(
  selectionSort([
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
