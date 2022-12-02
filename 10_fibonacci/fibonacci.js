const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    } else {
        let fiboArray = new Array(1, 1);
        for (let i = 0; i < (n - 2); i++) {
            let fibo = fiboArray[i] + fiboArray[i + 1];
            fiboArray.push(fibo);
            console.log(fibo);
        }
        return fiboArray[n - 1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
