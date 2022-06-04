// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// obstacles
// i'd do it using regex if I knew it.
function capitalize(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function myOtherSolution(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function mySolution(str) {
  // quick mistake: did not return the map, nor did I join(''). quick fix
  return str.split('').map((char, i, arr) => {
    if (i == 0) {
      return char.toUpperCase();
    }

    // quick mistake: compared to empty string instead of whitespace
    if (arr[i - 1] === ' ') {
      return char.toUpperCase();
    }

    return char;
  }).join('');
}



module.exports = capitalize;
