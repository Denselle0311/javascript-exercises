const reverseString = function(word) {
    const array = word.split('');
    const reverse = array.reverse();
    word = reverse.join('');
    return word;
};

// Do not edit below this line
module.exports = reverseString;
