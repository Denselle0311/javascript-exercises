const leapYears = function(year) {
    let centuryYear =  year % 400 === 0 || year % 100 !== 0;
    return year % 4 === 0 && centuryYear;
};

// Do not edit below this line
module.exports = leapYears;
