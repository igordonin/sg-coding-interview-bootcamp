// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

function QueueFunction() {
  this.data = [];
  this.add = function (element) {
    this.data.unshift(element);
  };

  this.remove = function () {
    return this.data.pop();
  };
}

class Queue {
  constructor() {
    this.data = [];
  }

  add = function (element) {
    this.data.unshift(element);
  };

  remove = function () {
    return this.data.pop();
  };
}

module.exports = Queue;
