//Question - https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5

function multiplesOf3and5(number) {
  let arr = [...Array(number).keys()]; // creates a new array with length n and values from 0 through n-1
  let multiples = arr.filter((e) => e % 3 == 0 || e % 5 == 0); //Filter the array
  return multiples.reduce((sum, i) => (sum += i)); //returning Sum of the array elements
}

multiplesOf3and5(1000);
