const removeFromArray = function(arr,...removeArr) {
  let filter =  arr.filter(item => {
        if(!removeArr.includes(item)) {
          return item
        }
        
    });
    return filter;
   
};

// Do not edit below this line
module.exports = removeFromArray;
