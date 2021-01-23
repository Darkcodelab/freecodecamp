//Question - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit

function converToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(converToF(-30));
