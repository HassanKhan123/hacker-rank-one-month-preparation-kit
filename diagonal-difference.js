// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = arr => {
  let leftToRightDiagonalSum = 0;
  let rightToLeftDiagonalSum = 0;

  arr.map((ar, i) => {
    leftToRightDiagonalSum += ar[i];
  });

  arr.reverse().map((ar, i) => {
    rightToLeftDiagonalSum += ar[i];
  });

  console.log(Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum));
};

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
