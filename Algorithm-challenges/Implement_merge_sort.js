//Question - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    return [...merged, ...array1, ...array2];
  }
}
