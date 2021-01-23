//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

function bouncer(arr) {
  return arr.filter((e) => Boolean(e));
}

console.log(bouncer([7, "ate", "", false, 9]));
