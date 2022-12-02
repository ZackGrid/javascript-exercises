const findTheOldest = function(personArray) {
    const oldest = personArray.sort(function (a, b) {
        const date = new Date().getFullYear();
        const last = 'yearOfDeath' in a  ?
            a.yearOfDeath - a.yearOfBirth :
            date - a.yearOfBirth;
            
        const next = 'yearOfDeath' in b ?
            b.yearOfDeath - b.yearOfBirth :
            date - b.yearOfBirth;
        
        return last > next ? -1 : 1;
        
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
