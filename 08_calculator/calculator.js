const add = function (a, b){
  return a + b;
}


const subtract = function(a, b) {
	return a - b;
};


const sum = function(a) {
  return a.reduce((acc, curr) => acc + curr, 0);
};


  
const multiply = function(arr) {
  return arr.reduce ((a, b) => a * b, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(factNum){
  let factResult = factNum;
    if (factNum === 0 || factNum === 1)
    return 1;
  while (factNum > 1){
  factNum--;
  factResult *= factNum;
  }
    return factResult;
}









// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
