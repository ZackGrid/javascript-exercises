const repeatString = function(words, number) {
    let fullString = "";
    for (let i = 0; i < number;i++){
        fullString += words;
    }
    if (number < 0){
        fullString = "ERROR";
    }
    return fullString;
};



// Do not edit below this line
module.exports = repeatString;
