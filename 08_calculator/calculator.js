const add = function(add1, add2) {
    let addNum = add1+add2;
    return addNum
};

const subtract = function(sub1, sub2) {
    let subNum = sub1 - sub2;
    return subNum
};

const sum = function(array) {
  let sumNum = 0;
  for (let i = 0; i < array.length; i++){
    sumNum += array[i];
    
  }
  return sumNum
};


const multiply = function(mul) {
    let mulNum = 1;
    for (let i = 0; i < mul.length; i++){
      mulNum *= mul[i];
    }
    return mulNum
};

const power = function(raiseNum, powerNum) {
	let power = raiseNum ** powerNum;
  return power
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
