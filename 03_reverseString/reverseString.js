const reverseString = function(input) {

    let chars = input.split("").reverse();
    let result;

    chars.forEach(element => {
        if(result) { 
            result += element;
        } else {
            result = element;
        }
    });

    return result;

};

// Do not edit below this line
module.exports = reverseString;
