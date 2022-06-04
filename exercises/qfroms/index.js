// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.inboundStack = new Stack();
    this.outboundStack = new Stack();
  }

  add(element) {
    while (this.outboundStack.peek()) {
      const outbound = this.outboundStack.pop();
      this.inboundStack.push(outbound);
    }

    this.inboundStack.push(element);
  }

  remove() {
    this.peek();
    return this.outboundStack.pop();
  }

  peek() {
    while (this.inboundStack.peek()) {
      const inbound = this.inboundStack.pop();
      this.outboundStack.push(inbound);
    }

    return this.outboundStack.peek();
  }
}

module.exports = Queue;
