const palindromes = function (testString) {
    testString = testString.toLowerCase();
    testString = testString.replace(/[^a-z]/gi, ''); //regex removes non alphabet chars and spaces

    let originalString = testString;
    let reversedString = "";
    
    testString = testString.split(''); //split into char array

    for(let i = (testString.length - 1); i >= 0; i--){
        reversedString += testString[i];
    }

    if(originalString == reversedString){
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
