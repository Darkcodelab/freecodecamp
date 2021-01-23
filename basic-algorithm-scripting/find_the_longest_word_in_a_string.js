//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
  let answer = "";
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > answer.length) {
      answer = str[i];
    }
  }
  return answer.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
