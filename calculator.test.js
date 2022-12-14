const calculator = require('./calculator');

const calc1 = new calculator(15, 3);
const calc2 = new calculator(0, 90);
const calc3 = new calculator(10, -2);

describe('Add Function Tests', () => {
  test('Addition of 15 & 3', () => {
    expect(calc1.add()).toBe(18);
  });
  test('Addition of 0 & 90', () => {
    expect(calc2.add()).toBe(90);
  });
  test('Addition of 10 & -2', () => {
    expect(calc3.add()).toBe(8);
  });
});
describe('Subtract Function Tests', () => {
  test('Addition of 15 & 3', () => {
    expect(calc1.subtract()).toBe(12);
  });
  test('Addition of 0 & 90', () => {
    expect(calc2.subtract()).toBe(-90);
  });
  test('Addition of 10 & -2', () => {
    expect(calc3.subtract()).toBe(12);
  });
});
describe('divide Function Tests', () => {
  test('Division of 15 & 3', () => {
    expect(calc1.divide()).toBe(5);
  });
  test('Division of 0 & 90', () => {
    expect(calc2.divide()).toBe(0);
  });
  test('Division of 10 & -2', () => {
    expect(calc3.divide()).toBe(-5);
  });
});
describe('Multiply Function Tests', () => {
  test('Addition of 15 & 3', () => {
    expect(calc1.multiply()).toBe(45);
  });
  test('Addition of 0 & 90', () => {
    expect(calc2.multiply()).toBe(0);
  });
  test('Addition of 10 & -2', () => {
    expect(calc3.multiply()).toBe(-20);
  });
});
