// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const miniMaxSum = arr => {
  const totalSum = arr.reduce((acc, cur) => (acc += cur), 0);

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  console.log(minSum, maxSum);
};

miniMaxSum([1, 3, 5, 7, 9]);
