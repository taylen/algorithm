const bSearch = require('../binarySearch');

test('bSearch(1, [1, 2, 3]) equal 0', () => {
  expect(bSearch(1, [1, 2, 3])).toBe(0);
});

test('bSearch(4, [1, 2, 3]) equal -1', () => {
  expect(bSearch(4, [1, 2, 3])).toBe(-1);
});

test('bSearch(0, [1, 2, 3]) equal -1', () => {
  expect(bSearch(0, [1, 2, 3])).toBe(-1);
});

test('bSearch(3, [1, 2, 4, 5]) equal -1', () => {
  expect(bSearch(3, [1, 2, 4, 5])).toBe(-1);
});

test('bSearch(4, [1, 2, 4, 5]) equal 2', () => {
  expect(bSearch(4, [1, 2, 4, 5])).toBe(2);
});