//Question - https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor

function largestPrimeFactor(number) {
  let LP = -1;
  while (number % 2 == 0) {
    LP = 2;
    number = number / 2;
  }

  for (let i = 3; i < number ** 0.5 + 1; i += 2) {
    while (number % i == 0) {
      LP = i;
      number = number / i;
    }
  }
  if (number > 2) {
    LP = number;
  }
  return LP;
}

console.log(largestPrimeFactor(13195));
