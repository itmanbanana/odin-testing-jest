import { analyzeArray } from "../analyze_array.js";

test('analyze basic array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, 
    min: 1, 
    max: 8, 
    length: 6
  });
});

test('analyze array of length 1', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1, 
    min: 1, 
    max: 1, 
    length: 1
  });
});

test('analyze empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0
  })
})

test('analyze sorted array', () => {
  expect(analyzeArray([-10, -7, -4, 0, 1, 3, 5, 5, 10, 56])).toEqual({
    average: 5.9, 
    min: -10, 
    max: 56, 
    length: 10
  });
});