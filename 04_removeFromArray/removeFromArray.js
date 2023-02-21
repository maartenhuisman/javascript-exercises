const removeFromArray = function(totalArray, others) {
    const othersArray = [others];
    let othersLength = othersArray.length;
    let totalLength = totalArray.length;
    console.log(totalArray);
    console.log(othersArray);
    console.log(othersLength);
    for (let i = 0; i < othersLength; i++) {
        for (let i = 0; i < totalLength; i++) {
            if (totalArray[i] === othersArray[0]) {
                totalArray.splice(i,1);
            }
            console.log(totalArray);
        }
    }
    return totalArray;
}

// Do not edit below this line
module.exports = removeFromArray;
