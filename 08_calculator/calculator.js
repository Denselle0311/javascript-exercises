const add = function(...arr) {
	return +arr.reduce((total,num) => Number(total + num));
};

const subtract = function(...arr) {
	return +arr.reduce((total,num) => Number(total - num));
};

const sum = function(arr) {
  return arr.reduce((total,num) => total + num,0)
};

const multiply = function(arr) {
  return arr.reduce((total,num) => total * num);
};

const power = function(a,b) {
  let p = a;
  for(let i = 1; i < b; i++) {
   p *= a
  }
	return p;
};

const factorial = function(n) {
  if(n == 0 ) return 1;
  let p = n;
  for(let i = 1; i < n; i++) {
    
    p *= i
  }
	return p;
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
