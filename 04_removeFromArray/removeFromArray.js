const removeFromArray = function(inputArray, ...stuffToRemove) {
    return inputArray.filter((item) => {
        return !stuffToRemove.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
