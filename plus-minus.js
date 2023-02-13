// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places.

const findRatio = arr => {
  let positiveSum = 0,
    negativeSum = 0,
    zeroSum = 0;

  arr.map(ar => {
    if (ar > 0) {
      positiveSum++;
    } else if (ar < 0) {
      negativeSum++;
    } else {
      zeroSum++;
    }
  });

  console.log(positiveSum / arr.length);
  console.log(negativeSum / arr.length);
  console.log(zeroSum / arr.length);
};

findRatio([1, 1, 0, -1, -1]);
