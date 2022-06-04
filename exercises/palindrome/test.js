const palindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

// test('longer palindromes', () => {
//   expect(palindrome('a nut for a jar of tuna')).toBeTruthy();
//   expect(palindrome('a santa dog lived as a devil god at nasa')).toBeTruthy();
//   expect(palindrome('as i pee sir, i see pisa')).toBeTruthy();
//   expect(palindrome('borrow or rob')).toBeTruthy();
//   expect(palindrome('dammit im mad')).toBeTruthy();
//   expect(palindrome('do geese see god')).toBeTruthy();
//   expect(palindrome('emil peed deep lime')).toBeTruthy();
//   expect(palindrome('no pet so tragic as a cigar to step on')).toBeTruthy();
//   expect(palindrome('oozy rat in a sanitary zoo')).toBeTruthy();
//   expect(palindrome('rats live on no evil star')).toBeTruthy();
//   expect(palindrome('stressed desserts')).toBeTruthy();
// });
