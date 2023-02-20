const permuting = (k, A, B) => {
  let str;
  const arr1 = A.sort((a, b) => a - b);
  const arr2 = B.sort((a, b) => b - a);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] + arr2[i] >= k) {
      str = "YES";
    } else {
      str = "NO";
      break;
    }
  }

  return str;
};

const res = permuting(
  91,
  [18, 73, 55, 59, 37, 13, 1, 33],
  [81, 11, 77, 49, 65, 26, 29, 49]
);
console.log(res + "\n");
