//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

function titleCase(str) {
  str = str.split(" ");
  return str
    .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
  //return str.split(" ").map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(" ");
}

console.log(titleCase("I'm a little tea pot"));
