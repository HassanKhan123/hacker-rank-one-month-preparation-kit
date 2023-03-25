const subArrayDivison = (s, d, m) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(s.slice(i, i + m));
    const chunk = s.slice(i, i + m).reduce((acc, cur) => acc + cur);

    if (chunk === d) count++;
  }

  console.log(count);
};

subArrayDivison([2, 2, 1, 3, 2], 4, 2);
