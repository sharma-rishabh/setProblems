const isArray = Array.isArray;

const isEqual = function (LHS, RHS) {
  const isOneOfThemPrimitive = !(isArray(LHS) && isArray(RHS));
  if (isOneOfThemPrimitive) {
    return LHS === RHS;
  }

  const lhsArray = LHS, rhsArray = RHS;

  if (rhsArray.length !== lhsArray.length) {
    return false;
  }

  if (rhsArray.length === 0) {
    return true;
  }

  const areFirstElementsEqual = isEqual(lhsArray[0], rhsArray[0]);
  return areFirstElementsEqual && isEqual(lhsArray.slice(1), rhsArray.slice(1));

};

exports.isEqual = isEqual;
