const palindromes = function (string) {
    let temp1 = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s+/g, "")
        .toLowerCase()
    
    let isPali = [...temp1];
    let isPaliReverse = isPali.map(x => {
        return x;
    });
    isPaliReverse.reverse();
    let paliOne = isPali.toString();
    let paliTwo = isPaliReverse.toString();
    return paliOne === paliTwo;
};

// Do not edit below this line
module.exports = palindromes;
