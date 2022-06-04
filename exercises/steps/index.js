// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// one quick block: how to initialize an array of size n
function steps(n) {
  recursiveSteps(n, 0, '');
}

// he suggests thinking about a guard clause for the base case to avoid SO
// when calling the recursive function again, remember to change the params!
function recursiveSteps(n, row, stair) {
  if (n === row) { return; }

  if (n === stair.length) {
    console.log(stair);
    recursiveSteps(n, row + 1, '');
    return;
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  recursiveSteps(n, row, stair);
}

function stephenRecursionSolution(n) {
  recursiveSteps(n, 0, '');
}

function stephenUsedRowsAndColumns(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}


function myOtherSolution(n) {
  // quick mistake: forgot to fill
  const steps = Array(n).fill(' ');

  steps.forEach((s, i) => {
    steps[i] = '#';
    console.log(steps.join(''));
  });
}

function mySolution1(n) {
  let step = '#';

  for (let i = 0; i < n; i++) {
    // quick mistake: inverted the order of the params here
    console.log(step.padEnd(n, ' '));
    step += '#';
  }
}

module.exports = steps;
