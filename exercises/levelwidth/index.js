// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// I had some trouble with finding a non-recursive solution for this
function levelWidth(root) {
 
}

function mySolution(root) {
  const toBeProcessed = [root, 'marker'];
  const counters = [];

  let counter = 0;
  while (toBeProcessed.length) {
    const node = toBeProcessed.shift();

    // this guard clause sucks. stephen solution is much better
    // what it means is: this is the last marker.
    if (toBeProcessed.length === 0 && node === 'marker') {
      counters.push(counter);
      return counters;
    }

    if (node === 'marker') {
      counters.push(counter);
      counter = 0;
      toBeProcessed.push(node);
      continue;
    }

    toBeProcessed.push(...node.children);
    counter++;
  }

  // return counters;
}

// this might have a worse runtime complexity
function someGuyUsingReduce(root) {
  let nodes = [root];
  let width = [];
  while (nodes.length) {
    width.push(nodes.length);
    nodes = nodes.reduce((arr, node) => {
      if (node.children) {
        return [...arr, ...node.children];
      }
    }, []);
  }
  return width;
}

function someGuysSolution(root) {
  const counters = [];
  let arr = [root];
  while (arr.length) {
    counters.push(arr.length);
    arr.forEach((node) => arr.push(...node.children));
    arr = arr.slice(counters[counters.length - 1]);
  }
  return counters;
}

function stephenSolution(root) {
  const toBeProcessed = [root, 'marker'];
  const counters = [0];

  while (toBeProcessed.length > 1) {
    const node = toBeProcessed.shift();

    if (node === 'marker') {
      counters.push(0);
      toBeProcessed.push(node);
    } else {
      toBeProcessed.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
