const reverseString = function(input) {
    let result = input.split("");
    let output = "";
    for(let i = (result.length -1); i >= 0; i--){
        output += result[i];
    }
    return output;
    
};

// Do not edit below this line
module.exports = reverseString;
