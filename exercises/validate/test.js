const Node = require('./node');
const validate = require('./index');

test('Validate recognizes a valid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  let n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);

  n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.right.right.right = new Node(0);

  expect(validate(n)).toEqual(false);
});

test('maggies test case', () => {
  const n = new Node(10);
  n.left = new Node(20);
  n.right = new Node(12);

  expect(validate(n)).toEqual(false);
});

test('leetcode test case', () => {
  const n = new Node(5);
  n.left = new Node(1);

  const wrongRight = new Node(4);
  n.right = wrongRight;

  wrongRight.left = new Node(3);
  wrongRight.right = new Node(6);

  expect(validate(n)).toEqual(false);
});

test('leetcode test case with equal values', () => {
  const n = new Node(2);
  n.left = new Node(2);
  n.right = new Node(2);

  expect(validate(n)).toEqual(false);
});
