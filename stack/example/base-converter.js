const Stack = require('../index');

function decimalToBinary(decNumber) {
    let number = decNumber
    let remStack = new Stack();
    let rem;
    let binaryString = '';

    while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.pushStack(rem);
        number = Math.floor(number / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.popStack().toString();
    }

    return binaryString;
}

function baseConverter (decNumber, base) {
    let remStack = new Stack();
    let rem;
    let baseString = '';
    let digits = '0123456789ABCDEF';

    if (!(base >= 2 && base <= 16)) {
        return '';
    }

    while(decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.pushStack(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()) {
        baseString += digits[remStack.popStack()];
    }

    return baseString;
}

module.exports = {
    decimalToBinary,
    baseConverter
}