


//My solution before seeing TOP solution
/*
const removeFromArray = function(array, ...args) {
    for(let i = 0; i < args.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(args[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};
array.array.forEach(element => {
    
});
*/

//TOP solution
const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(element => !args.includes(element))
}

// Do not edit below this line
module.exports = removeFromArray;
