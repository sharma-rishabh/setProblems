const isArray = Array.isArray;

const isEqual = function (LHS, RHS) {
  const isOneOfThemNotArray = !(isArray(LHS) && isArray(RHS));
  if (isOneOfThemNotArray) {
    return LHS === RHS;
  }
  const stack = [[LHS, RHS]];

  while (stack.length !== 0) {
    const bothArrays = stack.pop();
    const lhsArray = bothArrays[0];
    const rhsArray = bothArrays[1];

    if (lhsArray.length !== rhsArray.length) {
      return false;
    }

    for (let index = 0; index < lhsArray.length; index++) {
      if (isArray(lhsArray[index]) && isArray(rhsArray[index])) {
        stack.push([lhsArray[index], rhsArray[index]]);
      } else if (lhsArray[index] !== rhsArray[index]) {
        return false;
      }
    }
  }
  return true;
};

exports.isEqual = isEqual;
