//Question - https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-6-sum-square-difference

function sumSquareDifference(n) {
  let arr = Array.from(Array(n + 1).keys()); //Creating an array with length of n and values from 0 through n
  arr.shift(); //Removing the zero from the start of the array
  let sumOfSquares = arr.map((e) => e ** 2).reduce((sum, i) => (sum += i)); //squaring all the elements of the array and add all the squared elements
  let squareOfSums = arr.reduce((sum, i) => (sum += i)) ** 2; // Adding all the elements of the array and squaring it
  return squareOfSums - sumOfSquares; //Returning the difference
}

console.log(sumSquareDifference(10)); //2640
