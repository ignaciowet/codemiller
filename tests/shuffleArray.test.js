const shuffleArray = require('../src/shuffleArray');

test('shuffleArray returns a permutation with same length and elements', () => {
  const input = [1, 2, 3, 4, 5];
  const result = shuffleArray([...input]);
  expect(result).toHaveLength(input.length);
  const sortedResult = [...result].sort();
  const sortedInput = [...input].sort();
  expect(sortedResult).toEqual(sortedInput);
});
