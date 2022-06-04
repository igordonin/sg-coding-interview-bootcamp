// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Ignores whitespaces
function playingAroundWithPalindromePhrases(str) {
  const evalStr = str.replaceAll(' ', '');
  const half = Math.round(evalStr.length / 2) - 1;

  return evalStr.substring(0, half).split('').every((char, i) => {
    return char === evalStr[evalStr.length - i - 1];
  });
}

function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

function mySolution(str) {
  const reverseStr = str.split('').reduce((reversed, character) => character + reversed, '');

  console.log(reverseStr);

  return str === reverseStr;
}

module.exports = palindrome;
