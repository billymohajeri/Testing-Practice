const stringLength = require('./stringLength.js');

test('Length of "baby"', () => {
  expect(stringLength('baby')).toBe(4);
});

test('Length of ""', () => {
  expect(stringLength('')).toBe('The length is not within 1 to 10');
});

test('Length of "01234567890"', () => {
  expect(stringLength('01234567890')).toBe('The length is not within 1 to 10');
});
