const capitalize = require('./capitalize.js');

describe('Capitalize Tests', () => {
  test('Capitalize of "hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
