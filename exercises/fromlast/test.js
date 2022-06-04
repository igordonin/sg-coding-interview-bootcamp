const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List();

  for (let i = 1; i <= 1000; i++){
    l.insertLast(i);
  }

  expect(fromLast(l, 0).data).toEqual(1000);
  expect(fromLast(l, 23).data).toEqual(1000-23);
  expect(fromLast(l, 273).data).toEqual(1000-273);
  expect(fromLast(l, 444).data).toEqual(1000-444);
});