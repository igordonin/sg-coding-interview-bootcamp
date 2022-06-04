// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

// my solution
function reverse_my(str) {
  const strArray = str.split("");
  const lastIndex = strArray.length - 1;

  const reverseString = [];
  for (let i = lastIndex; i >= 0; i--) {
    reverseString.push(strArray[i]);
  }

  return reverseString.join("");
}

function reverse2(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Using Javascript's builtin functions
function reverse1(str) {
  return str.split('').reverse().join('');
}

module.exports = reverse;
