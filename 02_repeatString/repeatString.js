const repeatString = function(string, num) {
    let result = string;
    for(i = 0; i < (num - 1); i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
