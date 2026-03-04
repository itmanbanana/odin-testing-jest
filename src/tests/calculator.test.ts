import { calculator } from "../calculator.js";

describe('addition module', () => {
  test('add two positive numbers', () => {
    expect(calculator.add(345, 678)).toBe(1023);
  });
  test('add positive and negative numbers', () => {
    expect(calculator.add(-345, 678)).toBe(333);
  });
  test('add two negative numbers', () => {
    expect(calculator.add(-345, -678)).toBe(-1023);
  });
  test('add zero to positive number', () => {
    expect(calculator.add(0, 678)).toBe(678);
  });
  test('add zero to negative number', () => {
    expect(calculator.add(0, -678)).toBe(-678);
  });
});

describe('subtraction module', () => {
  test('subtract two positive numbers with positive difference', () => {
    expect(calculator.subtract(6, 4)).toBe(2);
  });
  test('subtract two positive numbers with negative difference', () => {
    expect(calculator.subtract(4, 6)).toBe(-2);
  });
  test('subtract two negative numbers with positive difference', () => {
    expect(calculator.subtract(-4, -6)).toBe(2);
  });
  test('subtract two negative numbers with negative difference', () => {
    expect(calculator.subtract(-6, -4)).toBe(-2);
  });
  test('subtract negative from positive with positive difference', () => {
    expect(calculator.subtract(4, -2)).toBe(6);
  });
  test('subtract positive from negative with negative difference', () => {
    expect(calculator.subtract(-6, 4)).toBe(-10);
  });
  test('subtract zero from positive number', () => {
    expect(calculator.subtract(0, 4)).toBe(-4);
  });
  test('subtract zero from negative number', () => {
    expect(calculator.subtract(0, -4)).toBe(4);
  });
  test('subtract positive number from zero', () => {
    expect(calculator.subtract(4, 0)).toBe(4);
  });
  test('subtract negative number from zero', () => {
    expect(calculator.subtract(-4, 0)).toBe(-4);
  });
});

describe('multiplication module', () => {
  test('multiply two positive numbers', () => {
    expect(calculator.multiply(345, 678)).toBe(233910);
  });
  test('multiple positive and negative numbers', () => {
    expect(calculator.multiply(-345, 678)).toBe(-233910);
  });
  test('multiply two negative numbers', () => {
    expect(calculator.multiply(-345, -678)).toBe(233910);
  });
  test('multiply one to positive number', () => {
    expect(calculator.multiply(1, 678)).toBe(678);
  });
  test('multiply one to negative number', () => {
    expect(calculator.multiply(1, -678)).toBe(-678);
  });
  test('multiply zero to positive number', () => {
    expect(calculator.multiply(0, 678)).toBe(0);
  });
  test('multiply zero to negative number', () => {
    expect(calculator.multiply(0, -678)).toBe(-0);
  });
});

describe('division module', () => {
  test('divide by zero', () => {
    expect(calculator.divide(12, 0)).toMatch("Division by 0");
  });
  test('divide two positive numbers', () => {
    expect(calculator.divide(12, 5)).toBe(2.4);
  });
  test('divide two negative numbers', () => {
    expect(calculator.divide(-12, -5)).toBe(2.4);
  });
  test('divide positive from negative number', () => {
    expect(calculator.divide(12, -5)).toBe(-2.4);
  });
  test('divide negative from positive number', () => {
    expect(calculator.divide(-12, 5)).toBe(-2.4);
  });
});