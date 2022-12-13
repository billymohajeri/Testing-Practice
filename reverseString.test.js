const reverseString = require('./reverseString');

describe('String Reverse Tests', () => {
  test('Reverse of "123"', () => {
    expect(reverseString('123')).toBe('321');
  });
});
