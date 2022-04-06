const areBothArrays = function (element1, element2) {
  return Array.isArray(element1) && Array.isArray(element2);
};

const areArraysEqual = function (array1, array2) {
  if (!areBothArrays(array1, array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areElementsEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
};

const areElementsEqual = function (element1, element2) {
  if (areBothArrays(element1, element2)) {
    return areArraysEqual(element1, element2);
  }
  return element1 === element2
};

exports.areElementsEqual = areElementsEqual;