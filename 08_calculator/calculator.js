const add = function (a, b) {  
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  const total = a.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return total;
};

const multiply = function(a) {
  const total = a.reduce((previousValue, currentValue) => previousValue * currentValue);
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    let fac = 1;
    for (i = 1; i <= a; i++){
      fac *= i;
    }
    return fac;
  }
    
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
