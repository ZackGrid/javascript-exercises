//My solution was quite similar to TOP solution
const sumAll = function(x, y) {
    let higher = 0;
    let lower = 0;
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 ) {
        return "ERROR";       
    } else if(x > y) {
        higher = x;
        lower = y;
    } else {
        higher = y;
        lower = x;
    }
    let sum = lower;
    for (let i = lower; i < higher; i++) {
        sum += (i+1);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
