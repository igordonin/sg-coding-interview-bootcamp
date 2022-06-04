// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Questions to make:
// - Should it have the same amount for each character? 
// - Example: are these anagrams? rams and raaaams
// - should I disregard white space and punctuation?
// - should I ignore case?
function anagrams(stringA, stringB) {
  const cleanup = (str) => str.replaceAll(/[^\w]/g, '').toLowerCase();
  const sort = (str) => str.split('').sort().join('');
  const orderA = sort(cleanup(stringA));
  const orderB = sort(cleanup(stringB));

  return orderA === orderB;
}


// This solution works only if both words have the same amount of each character
function solutionBySortingTheChars(stringA, stringB) {
  const regex = /[^\w]/g;
  const lowerStringA = stringA.replaceAll(regex, '').toLowerCase();
  const lowerStringB = stringB.replaceAll(regex, '').toLowerCase();

  const orderA = lowerStringA.split('').sort();
  const orderB = lowerStringB.split('').sort();

  return orderA.join('') === orderB.join('');
}

// I'm blocked because I'm lacking the skills to use regex to remove non-letters, 
// whitespaces, punctuation, etc
function blocked1(stringA, stringB) {
  const lowerStringA = stringA.toLowerCase();
  const lowerStringB = stringB.toLowerCase();

  const mappedLettersFromA = lowerStringA.split('').reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current]++ : 0;
    return acc;
  }, {});

  const mappedLettersFromB = lowerStringB.split('').reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current]++ : 0;
    return acc;
  }, {});

  console.log(mappedLettersFromA, mappedLettersFromB);

  // regex or replace non letters
}

module.exports = anagrams;
