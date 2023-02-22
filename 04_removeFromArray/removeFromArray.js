const removeFromArray = function(totalArray, ...othersArray) {
    let othersLength = othersArray.length;
    let totalLength = totalArray.length;
    console.log('total: ', totalArray);
    console.log('others: ', othersArray);
    console.log('othersLength: ', othersLength);
    for (let x = 0; x < othersLength; x++) {
        for (let i = 0; i < totalLength; i++) {
            if (totalArray[i] === othersArray[x]) {
                totalArray.splice(i,1);
            }
            console.log(totalArray);
        }
    }
    return totalArray;
}

// Do not edit below this line
module.exports = removeFromArray;
