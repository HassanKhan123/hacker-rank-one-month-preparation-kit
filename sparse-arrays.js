// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

const matchingString = (strings, queries) => {
  let obj = {};

  strings.map(str => {
    if (queries.includes(str)) {
      if (obj[str]) {
        obj[str] = obj[str] + 1;
      } else {
        obj[str] = 1;
      }
    }
  });

  let res = [];

  queries.map(q => {
    if (obj[q]) {
      res.push(obj[q]);
    } else {
      res.push(0);
    }
  });

  console.log(obj);
  console.log(res);
};

matchingString(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
