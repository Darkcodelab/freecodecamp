//Question - https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product

function largestPalindromeProduct(n) {
  let lowerLimit = Number("1" + "0".repeat(n - 1));
  let upperLimit = Number("9".repeat(n));
  let maxProduct = 0;
  for (let i = upperLimit; i >= lowerLimit; i--) {
    for (let j = i; j >= lowerLimit; j--) {
      let product = i * j;
      if (product < maxProduct) {
        break;
      } else {
        if (
          product == product.toString().split("").reverse().join("") &&
          product > maxProduct
        ) {
          maxProduct = product;
        }
      }
    }
  }
  return maxProduct;
}

console.log(largestPalindromeProduct(3)); //906609
