// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  let maxBlocksOnEachSide = n - 1;

  for (let i = 0; i < n; i++) {
    const level = Array(1 + 2 * i)
      .fill("#")
      .join("");

    console.log(
      level
        .padStart(level.length + maxBlocksOnEachSide, " ")
        .padEnd(level.length + (maxBlocksOnEachSide * 2), " ")
    );
    maxBlocksOnEachSide--;
  }
}


function myFirstSolution(n) {
    let maxBlocksOnEachSide = n - 1;
  
    for (let i = 0; i < n; i++) {
      const level = Array(1 + 2 * i)
        .fill("#")
        .join("");
  
      console.log(
        level
          .padStart(level.length + maxBlocksOnEachSide, " ")
          .padEnd(level.length + (maxBlocksOnEachSide * 2), " ")
      );
      maxBlocksOnEachSide--;
    }
  }

module.exports = pyramid;
