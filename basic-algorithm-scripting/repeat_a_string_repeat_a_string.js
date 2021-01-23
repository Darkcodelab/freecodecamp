//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  let answer = "";
  for (let i = 0; i < num; i++) {
    answer += str;
  }
  return answer;
}

console.log(repeatStringNumTimes("abc", 3));
