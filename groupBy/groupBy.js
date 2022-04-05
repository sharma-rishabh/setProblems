const areLengthsUndefined = function (element1, element2) {
  return element1.length === undefined && element2.length === undefined;
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
};

const areElementsEqual = function (element1, element2) {
  if (areLengthsUndefined(element1, element2)) {
    return element1 === element2;
  }

  return areArraysEqual(element1, element2);
};

const isSubset = function (set, subset) {
  for (let index = 0; index < set.length; index++) {
    if (areElementsEqual(set[index], subset)) {
      return true;
    }
  }

  return false;
};

const getUniqueElements = function (set) {
  const uniqueElements = [];

  for (let index = 0; index < set.length; index++) {
    if (!isSubset(uniqueElements, set[index])) {
      uniqueElements.push(set[index]);
    }
  }

  return uniqueElements;
};

const uniqueSubsets = function (set) {
  const uniqueElements = getUniqueElements(set);
  const subsets = [];

  for (let index = 0; index < uniqueElements.length; index++) {
    const subset = [];

    for (let j = 0; j < set.length; j++) {
      if (areElementsEqual(uniqueElements[index], set[j])) {
        subset.push(set[j]);
      }
    }
    subsets.push(subset);
  }

  return subsets;
};

console.log(uniqueSubsets([1, 2, 1]));
console.log(uniqueSubsets([1, 2, 3, 1, 2, 4]));
console.log(uniqueSubsets([[1, 1], 1, [1, 1], 1]));