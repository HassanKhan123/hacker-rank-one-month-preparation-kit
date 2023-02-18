const flippingBits = n => {
  let binary = n.toString("2").padStart(32, "0");

  console.log(binary.toString());

  let str = [];

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) {
      str.push(1);
    } else {
      str.push(0);
    }
  }

  return parseInt(str.join(""), 2);
};

flippingBits(9);
