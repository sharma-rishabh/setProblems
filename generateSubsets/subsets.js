const binaryConversion = function (number) {
  let binary = '';
  let remainingNumber = number;

  while (remainingNumber > 0) {
    const remainder = remainingNumber % 2;
    binary = remainder + binary;
    remainingNumber = Math.floor(remainingNumber / 2);
  }
  return binary;
};

const extractSubsets = function (set) {
  const subsets = [];

  for (let i = 0; i < Math.pow(2, set.length); i++) {
    let binary = binaryConversion(i);
    binary = binary.padStart(set.length, '0');

    const subset = [];
    for (j = 0; j < binary.length; j++) {
      if (binary[j] !== '0') {
        subset.push(set[j]);
      }
    }

    subsets.push(subset);
  }
  return subsets;
};

exports.extractSubsets = extractSubsets;