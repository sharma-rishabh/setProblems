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


const classifyByIdentity = function (identityGroups, currentElement) {
  for (let index = 0; index < identityGroups.length; index++) {
    if (areElementsEqual(currentElement, identityGroups[index][0])) {
      return identityGroups[index].push(currentElement);
    }
  }
  return identityGroups.push([currentElement]);
};

const groupByIdentity = function (set) {
  const identityGroups = [];

  for (index = 0; index < set.length; index++) {
    classifyByIdentity(identityGroups, set[index]);
  }
  return identityGroups;
};

console.log(groupByIdentity([1, 2, 1])); //[ [ 1, 1 ], [ 2 ] ]
console.log(groupByIdentity([1, 2, 3, 1, 2, 4])); //[ [ 1, 1 ], [ 2, 2 ], [ 3 ], [ 4 ] ]
console.log(groupByIdentity([[1, 1], 1, [1, 1], 1])); //[ [ [ 1, 1 ], [ 1, 1 ] ], [ 1, 1 ] ]
console.log(groupByIdentity([[1, 2], '1,2', '1,2', [1, 2]])); // [ [ [ 1, 2 ], [ 1, 2 ] ], [ '1,2', '1,2' ] ]
console.log(groupByIdentity(['1', 2, 1, 'a', 'b', 'a'])); //[ [ '1' ], [ 2 ], [ 1 ], [ 'a', 'a' ], [ 'b' ] ]
console.log(groupByIdentity([[], 2, 1, []])); //[ [ [], [] ], [ 2 ], [ 1 ] ]
console.log(groupByIdentity([[1, 2], [1, 2]])); //[ [ [ 1, 2 ], [ 1, 2 ] ] ]
console.log(groupByIdentity([[], 1, [], 1])); //[ [ [], [] ], [ 1, 1 ] ]
console.log(groupByIdentity([[[1], [2]], [[1], [2]]])); //[ [ [ [Array], [Array] ], [ [Array], [Array] ] ] ]