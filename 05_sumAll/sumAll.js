const sumAll = function(num, times) {
    let sum = 0;

    if(num < 0 || typeof times !== 'number') 
    {
       return sum = 'ERROR';
    } else if (num > times) 
    {
        [num,times] = [times,num]
    }
    for (let i = num; i <= times; i++) {
            sum += i;
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
