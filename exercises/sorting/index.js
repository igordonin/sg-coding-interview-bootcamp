// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// a shrinking window (arr.length-i) which
// pushes the largest elements to the end of the array
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // the minus 1 here is because we're already getting
    // the last element with  j+1. So we need to protect
    // against that
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function myBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[i] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

// stephen calls it the 'prove me wrong' algorithm
// poin here is to assume value at i index is the smallest
// and then swap with j's and if there's a smaller one, swap them
// it actually moves the elements to the left
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      const lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mySecondSelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let minIndex = i;

      if (arr[i] > arr[j]) {
        minIndex = j;

        const lesser = arr[j];
        arr[j] = arr[i];
        arr[i] = lesser;
      }
    }
  }

  return arr;
}

function mySelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

// takes an array and divides it into the smaller chunk possible
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const halfIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, halfIndex);
  const right = arr.slice(halfIndex);

  return merge(mergeSort(left), mergeSort(right));
}

// it's purpose is to receive two SORTED arrays and merge them together
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
