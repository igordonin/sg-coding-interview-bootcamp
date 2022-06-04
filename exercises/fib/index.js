// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowRecursiveFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowRecursiveFib);

function usingFor(n) {
  const sq = [0, 1];

  for (let i = 2; i <= n; i++) {
    sq[i] = sq[i - 1] + sq[i - 2];
  }

  return sq[n];
}

function mySolution(n) {
  const sq = Array(n + 1).fill(0);

  const result = sq.reduce(
    (acc, curr, i) => {
      if (acc[i]) {
        return acc;
      }

      acc[i] = acc[i - 1] + acc[i - 2];
      return acc;
    },
    [0, 1, 1]
  );

  return result[n];
}

module.exports = fib;
