// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const lowCaseStr = str.toLowerCase();
  const _vowels = "aeiou";

  return lowCaseStr.split("").reduce((acc, curr) => {
    if (_vowels.includes(curr)) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

function mySolutionWithoutRegex(str) {
  const lowCaseStr = str.toLowerCase();
  const _vowels = "aeiou";

  return lowCaseStr.split("").reduce((acc, char) => {
    if (_vowels.includes(char)) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

function usingRegex(str) {
  const word = str.replaceAll(/[^aeiou]+/gi, "");
  return word.length;
}

module.exports = vowels;
