//TOP solution, wich is much better than mine
const reverseString = function(string) {
    return string.split("").reverse().join("");
}

//My solution before seeing TOP solution file
/*const reverseString = function(string) {
    reversedString = "";
    index = string.length - 1;
    for (let i = 0; i < string.length; i++) {
        reversedString += string.charAt(index);
        index--;
    }

    return reversedString;
};*/

// Do not edit below this line
module.exports = reverseString;
