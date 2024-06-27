const fibonacci = function(num) {
    Number(num);
    if(num < 0) return 'OOPS';
    
    let acc = 0;
    let current = 0;
    let prev = 1;
    for(let i = 0; i < num; i++) {
      acc = current + prev;
      prev = current;
      current = acc;
    }
    return current
  };

// Do not edit below this line
module.exports = fibonacci;
