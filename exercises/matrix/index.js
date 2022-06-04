// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// matrix(5)
//     [[1,  2,  3, 4,  5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]

function Position(n) {
  this.row = 0;
  this.column = 0;
  this.next;

  this.boundaries = {
    row: {
      lower: 0,
      upper: n,
    },
    column: {
      lower: 0,
      upper: n,
    },
  };

  this.moveRight = function () {
    this.column++;

    if (this.column === this.boundaries.column.upper - 1) {
      this.next = this.moveDown;
    }
  };

  this.moveDown = function () {
    this.row++;

    if (this.row === this.boundaries.row.upper - 1) {
      this.next = this.moveLeft;
    }
  };

  this.moveLeft = function () {
    this.column--;

    if (this.column === this.boundaries.column.lower) {
      this.next = this.moveUp;
    }
  };

  this.moveUp = function () {
    this.row--;

    if (this.row === this.boundaries.row.lower) {
      // reduce upper bounds
      this.boundaries.row.upper--;
      this.boundaries.column.upper--;

      // increase lower bounds and reset current position
      this.row = ++this.boundaries.row.lower;
      this.column = ++this.boundaries.column.lower;

      this.next = this.moveRight;
    }
  };

  this.get = function () {
    return { row: this.row, column: this.column };
  };

  this.move = function () {
    if (!this.next) {
      this.next = this.moveRight;
    }

    this.next();
  };
}

function matrix(n) {
  const maxCounter = n * n;
  const myPosition = new Position(n);

  const matrix = Array(n)
    .fill(null)
    .map(() => Array(n));

  for (let counter = 0; counter < maxCounter; counter++) {
    const pos = myPosition.get();
    matrix[pos.row][pos.column] = counter + 1;
    myPosition.move();
  }

  return matrix;
}

module.exports = matrix;
