const anagrams = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});

test('more tests', () => {
  expect(anagrams('Mother-in-law', 'Hitler woman')).toBeTruthy();
  expect(anagrams('Debit card', 'Bad credit')).toBeTruthy();
  expect(anagrams('Dormitory', 'Dirty room')).toBeTruthy();
  expect(anagrams('School master', 'The classroom')).toBeTruthy();
});

test('same letters but not exactly same amount for each of them', () => {
  expect(anagrams('The earthquakes', 'The queer shakes')).toBeTruthy();
  expect(anagrams('Astronomer', 'Moon starrer')).toBeTruthy();
  expect(anagrams('Punishments', 'Nine thumps')).toBeTruthy();
});
