// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let reference = this.head;
    let counter = 0;
    while (reference) {
      counter++;
      reference = reference.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let reference = this.head;
    while (reference.next) {
      reference = reference.next;
    }
    return reference;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // this gave me some trouble because i wasn't checking
  // for the guard clauses at all (empty and size 1)
  removeLast() {
    let reference = this.head;

    if (!reference) {
      return;
    }

    // this case gave me trouble. I did reference = null
    // which did not clear the head.
    if (!reference.next) {
      this.head = null;
      return;
    }

    while (reference.next.next) {
      reference = reference.next;
    }
    reference.next = null;
  }

  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    const reference = this.getLast();
    reference.next = node;
  }

  getAt(index) {
    if (!this.head || index < 0) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let reference = this.head.next;
    let indexReference = 1;
    while (indexReference < index) {
      if (!reference) {
        return null;
      }

      reference = reference.next;
      indexReference++;
    }

    return reference;
  }

  stephenGetAtIsBetter(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    const nodeAtIndexBefore = this.getAt(index - 1);
    const nodeAtIndexAfter = this.getAt(index + 1);

    if (!nodeAtIndexBefore) {
      this.head = nodeAtIndexAfter;
      return;
    }

    nodeAtIndexBefore.next = nodeAtIndexAfter;
  }

  // stephens crash at negative index
  stephenInsertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  insertAt(data, index) {
    if (index < 0) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const nodeAtIndexBefore = this.getAt(index - 1);
    const currentNodeAtIndex = this.getAt(index);

    if (!nodeAtIndexBefore) {
      this.insertLast(data);
      return;
    }

    const node = new Node(data, currentNodeAtIndex);
    nodeAtIndexBefore.next = node;
  }

  forEach(fn) {
    let reference = this.head;
    while (reference) {
      fn.apply(this, [reference]);
      reference = reference.next;
    }
  }

  *[Symbol.iterator]() {
    let reference = this.head;
    while (reference) {
      yield reference;
      reference = reference.next;
    }
  }
}

module.exports = { Node, LinkedList };
