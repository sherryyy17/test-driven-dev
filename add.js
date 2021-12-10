const add = function (num1, num2) {
  if (Array.isArray(num1)) {
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
      sum += num1[i];
    }
    return sum;
  } else if (isNaN(num1, num2)) {
    return NaN;
  }

  return parseFloat(num1) + parseFloat(num2);
};

module.exports = add;
