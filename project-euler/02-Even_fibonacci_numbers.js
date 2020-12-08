//Question - https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers

function fiboEvenSum(n) {
  if (n < 2) {
    return 0;
  } else {
    let fP = 0;
    let sP = 2;
    let sum = fP + sP;
    while (sP <= n) {
      let tP = 4 * sP + fP;
      if (tP > n) {
        break;
      } else {
        fP = sP;
        sP = tP;
        sum += sP;
      }
    }
    return sum;
  }
}

fiboEvenSum(10); //10
