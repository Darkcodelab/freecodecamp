//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
  let str1 = arr[0].toLowerCase().split("");
  let str2 = arr[1].toLowerCase().split("");
  let answer = true;
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) == -1) {
      answer = false;
    }
  }
  return answer;
  //  return arr[1].toLowerCase().split("").every(e => arr[0].toLowerCase().split("").indexOf(e) != -1)
}

console.log(mutation(["hello", "hey"]));
