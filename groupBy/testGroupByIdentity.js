const isEqual = require('./lib.js').isEqual;
const groupByIdentity = require('./groupByIdentity.js').groupByIdentity;

const testGroupByIdentity = function (set, expectedSet, description) {
  let result = 'x';
  if (isEqual(groupByIdentity(set), expectedSet)) {
    result = '✓';
  }
  console.log(result, '-', description);
  return isEqual(set, expectedSet);
}

const groupByIdentityTestCases = function () {
  testGroupByIdentity([1, 2, 1], [[1, 1], [2]], 'Number only');
  testGroupByIdentity([1, 2, 3, 1, 2, 4], [[1, 1], [2, 2], [3], [4]], 'Multiple numbers');
  testGroupByIdentity(['1', 2, 1, 'a', 'b', 'a'], [['1'], [2], [1], ['a', 'a'], ['b']], 'Numbers and strings.');
  testGroupByIdentity([[1, 1], 1, [1, 1], 1], [[[1, 1], [1, 1]], [1, 1]], 'Array inside arrays.');
  testGroupByIdentity([[1, 2], '1,2', '1,2', [1, 2]], [[[1, 2], [1, 2]], ['1,2', '1,2']], 'Numbers as strings.');
  testGroupByIdentity([[], 2, 1, []], [[[], []], [2], [1]], 'Empty sets.');
  testGroupByIdentity([[[1], [2]], [[1], [2]]], [[[[1], [2]], [[1], [2]]]], 'Deep Nesting.');
};

groupByIdentityTestCases();