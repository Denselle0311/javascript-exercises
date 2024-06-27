const palindromes = function (str) {
//     let temp = str.split(',').join('').split(' ')
//                   .join('').toLowerCase().split('').filter(e => e != '.' && e != '!').reverse().join('');
//     let strClone = str.split(',').join('').split(' ')
//                   .join('').toLowerCase().split('').filter(e => e != '.' && e != '!').join('');
const cleanStr = str.toLowerCase()
                      .split('').filter(e => e != ' ' && e != ',' && e != '!' && e != '.').join('');
  const reverse = Array.from(cleanStr).reverse().join('');
  return reverse === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
