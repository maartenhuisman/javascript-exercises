const sumAll = function(number1, number2) {
    let sum = 0
    if ((number1 < 0 || number2 < 0)) {
        return 'ERROR';
    } else if ((!(Number.isInteger(number1)) || !(Number.isInteger(number2)))) {
        return 'ERROR';
    } else {
        if (number1 < number2) {
            let startNumber = number1;
            let endNumber = number2;
            for (let i = startNumber; i <= endNumber; i++) {
                sum += i;
            }
        } else {
            let startNumber = number2;
            let endNumber = number1;
            for (let i = startNumber; i <= endNumber; i++) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
