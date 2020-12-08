//Question - https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-5-smallest-multiple

function smallestMult(n) {
  var gcd = function (a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer = +((answer * i) / gcd(answer, i));
  }
  return answer;
}

console.log(smallestMult(20)); //232792560
