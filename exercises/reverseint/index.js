// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const abs = Math.abs(n);

  const reversedNumber = abs.toString().split('')
    .reduce((reversed, character) => character + reversed, '');

  const backToNumber = parseInt(reversedNumber, 10);

  return backToNumber * Math.sign(n);
}

function mySolution(n) {
  const multiplier = n < 0 ? -1 : 1;
  const abs = Math.abs(n);

  const reversedNumber = abs.toString().split('')
    .reduce((reversed, character) => character + reversed, '');

  const backToNumber = parseInt(reversedNumber, 10);

  return backToNumber * multiplier;
}

function mySolutionRefactored(n) {
  const abs = Math.abs(n);

  const reversedNumberStr = abs.toString().split('')
    .reduce((reversed, character) => character + reversed, '');

  const reversedNumber = parseInt(reversedNumberStr, 10);

  return reversedNumber * Math.sign(n);
}

module.exports = reverseInt;
