// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const toBeProcessed = [this.root];

    // so what this is doing is:
    // adds a level, BREADTH-WISE, to the "to be processed array"
    // take ONE NODE at a time (USING SHIFT)
    // ****** shift removes the FIRST element from the array and returns it (mutates the array)
    // add that node's CHILDREN to the array
    // consider it PROCESSED
    // by adding it to the accumulator inside the provided function fn
    while (toBeProcessed.length) {
      const node = toBeProcessed.shift();
      toBeProcessed.push(...node.children);
      fn(node);
    }
  }

  // the DIFFERENCE here is that 
  // CHILDREN are added to the START of the "to be processed array" instead of the END
  // by using UNSHIFT.
  // ****** unshift adds one or more elements to the beginning of an array [...]
  traverseDF(fn) {
    const toBeProcessed = [this.root];

    while(toBeProcessed.length) {
      const node = toBeProcessed.shift();
      // UNSHIFT instead of PUSH
      toBeProcessed.unshift(...node.children);
      fn(node);
    }
  }
}

class MySolutionNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove() {
    return this.children.pop();
  }
}

class MySolutionTree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn, node) {
    if (!this.root) {
      return;
    }

    if (!node) {
      node = this.root;
      fn(node);
    }

    const children = node.children;
    for (let child in children) {
      fn(children[child]);
    }

    for (let child in children) {
      this.traverseBF(fn, children[child]);
    }
  }

  traverseDF(fn, node) {
    if (!this.root) {
      return;
    }

    if (!node) {
      node = this.root;
    }

    fn(node);

    const children = node.children;
    for (let child in children) {
      this.traverseDF(fn, children[child]);
    }
  }
}

module.exports = { Tree, Node };
