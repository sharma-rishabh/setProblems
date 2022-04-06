const library = require('./lib.js')
const areElementsEqual = library.areElementsEqual;

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

exports.groupByIdentity = groupByIdentity;
