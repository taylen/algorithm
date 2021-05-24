const gcd = require('../gcd');

// gcd(2, 4) === 2
test('gcd(2, 4) equal 2', () => {
  expect(gcd(2, 4)).toBe(2);
});

// gcd(5, 7) === 1
test('gcd(5, 7) equal 1', () => {
  expect(gcd(5, 7)).toBe(1);
});

// gcd(15, 19) === 1
test('gcd(15, 19) equal 1', () => {
  expect(gcd(15, 19)).toBe(1);
});