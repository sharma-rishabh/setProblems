const library = require('./lib.js')
const isEqual = library.isEqual;

const classifyByIdentity = function (identityGroups, currentElement) {
  for (let index = 0; index < identityGroups.length; index++) {
    if (isEqual(currentElement, identityGroups[index][0])) {
      return identityGroups[index].push(currentElement);
    }
  }
  return identityGroups.push([currentElement]);
};

const groupByIdentity = function (elementList) {
  const identityGroups = [];

  for (index = 0; index < elementList.length; index++) {
    classifyByIdentity(identityGroups, elementList[index]);
  }
  return identityGroups;
};

exports.groupByIdentity = groupByIdentity;
