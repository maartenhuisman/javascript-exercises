const reverseString = function(text) {
    let textArray = text.split('');
    let reversedArray = textArray.reverse();
    let reversedText = reversedArray.join('');
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
