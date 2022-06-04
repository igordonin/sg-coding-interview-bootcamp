const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 39', () => {
  expect(fib(39)).toEqual(63245986);
});

test('calculates correct fib value for 100', () => {
  expect(fib(100)).toEqual(354224848179262000000);
});

test('calculates correct fib value for 1000', () => {
  expect(fib(1000)).toEqual(4.346655768693743e+208);
});

test('calculates correct fib value for 10000', () => {
  expect(fib(1200)).toEqual(2.7269884455406272e+250);
});