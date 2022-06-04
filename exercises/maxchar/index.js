// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charsMap[char] = charsMap[char] + 1 || 1;

    if (charsMap[char] > max) {
      max = charsMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function myOptimizedSolution(str) {
  const charsMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charsMap[char] = charsMap[char] + 1 || 1;

    if (charsMap[char] > max) {
      max = charsMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function mySolution(str) {
  const charsMap = str.split('').reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});

  const max = Math.max(...Object.values(charsMap));
  return Object.keys(charsMap).find(key => charsMap[key] === max);
}

module.exports = maxChar;
