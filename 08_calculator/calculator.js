const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  let sum = 0;
  for(num of array){
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(num of array){
    product *= num;
  }
  return product;
};

const power = function(num, power) {
  if(power == 0){
    return 1;
  }

  let result = 1;
  for(let i = 1; i <= power; i++){
    result *= num;
  }

  return result;
};

const factorial = function(num) {

  let result = 1;
  for(let i = num; i > 0; i--){
    result *= i;
  }
  return result;
	
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
