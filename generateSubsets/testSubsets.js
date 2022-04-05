const lib = require('./subsets.js');
const extractSubsets = lib.extractSubsets;

const areEqual = function (array1, array2) {
  for (let index = 0; index < array2.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const areSubsetsEqual = function (subsets1, subsets2) {
  for (let index = 0; index < subsets2.length; index++) {
    if (!areEqual(subsets1[index], subsets2[index])) {
      return false;
    }
  }
  return true;
};

const testExtractSubsets = function (set, expectedOutput, description) {
  let mark = 'x';
  if (areSubsetsEqual(extractSubsets(set), expectedOutput)) {
    mark = '✓';
  }
  console.log(mark, '-', description);
  return areSubsetsEqual(extractSubsets(set), expectedOutput);
};

const extractSubsetsTestCases = function () {
  testExtractSubsets([], [[]], 'Empty set');
  testExtractSubsets([1], [[], [1]], 'One element');
  testExtractSubsets([1, 2], [[], [2], [1], [1, 2]], 'Two element');
  testExtractSubsets([1, 2, 3], [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]], 'Three element');
};

extractSubsetsTestCases();