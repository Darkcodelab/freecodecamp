//Question - https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function updateInventory(arr1, arr2) {
  const arr1OneDimension = Array.prototype.concat.apply([], arr1);
  for (let i = 0; i < arr2.length; i++) {
    let pos = arr1OneDimension.indexOf(arr2[i][1]);
    if (pos != -1) {
      arr1[Math.floor(pos / 2)][0] += arr2[i][0];
      continue;
    }
    arr1.push([arr2[i][0], arr2[i][1]]);
  }
  arr1.sort((a, b) => (a[1] > [b[1]] ? 1 : -1));
  return arr1;
}

let curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

let newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
