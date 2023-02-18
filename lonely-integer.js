// Given an array of integers, where all elements but one occur twice, find the unique element.

const lonelyInteger = arr => {
  let obj = {};

  arr.map(ar => {
    if (obj[ar]) {
      obj[ar] = obj[ar] + 1;
    } else {
      obj[ar] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] == 1) {
      console.log(key);
    }
  }
};

lonelyInteger([1, 2, 3, 4, 3, 2, 1]);
