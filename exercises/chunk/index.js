// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 0, 5
// 5, 10
// 10, 15


function chunk(array, size) {
  const chunked = [];

  let i = 0;
  while ((i * size) < array.length) {
    chunked.push(array.slice(i * size, (i + 1) * size));
    i++;
  }

  return chunked;
}

function myOptimizedSolution(array, size) {
  const chunked = [];

  let i = 0;
  while ((i * size) < array.length) {
    chunked.push(array.slice(i * size, (i + 1) * size));
    i++;
  }

  return chunked;
}

function myNewSolution(array, size) {
  return array.reduce((acc, current) => {
    const lastChunkIndex = acc.length === 0 ? 0 : acc.length - 1;
    acc[lastChunkIndex] = acc[lastChunkIndex] || [];

    if (acc[lastChunkIndex].length < size) {
      acc[lastChunkIndex].push(current);
    } else {
      acc.push([current]);
    }

    return acc;
  }, []);
}

function someDudesSolution(array, size) {
  let chunk = [];
  while (array.length > 0) {
    chunk.push(array.splice(0, size));
  }
  return chunk;
}


function mySolution(array, size) {
  return array.reduce((acc, current) => {
    const lastChunkIndex = acc.length === 0 ? 0 : acc.length - 1;

    // the error here was I used the original array instead of the acc
    const lastChunk = acc[lastChunkIndex] || [];

    if (lastChunk.length < size) {
      // the error here is that this lastChunk was never in the acc
      lastChunk.push(current);
    } else {
      const newChunk = [current];
      acc.push(newChunk);
    }

    return acc;
  }, []);
}

module.exports = chunk;
