const countingSort = arr => {
  const resultArr = new Array(100).fill(0);

  arr.map((ar, i) => {
    if (Number(resultArr[ar]) > 0) {
      resultArr[ar] = resultArr[ar] + 1;
    } else {
      resultArr[ar] = 1;
    }
  });

  console.log(resultArr);
};

countingSort([1, 1, 3, 2, 1]);
