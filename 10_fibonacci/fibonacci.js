const fibonacci = function(placement) {
    if(placement < 0){
        return "OOPS";
    }

    let currentNumber = 0,
        lastNumber = 1;
    
        for(let i = 0; i < placement; i++){
        let placeholder = currentNumber;
        currentNumber += lastNumber;
        lastNumber = placeholder;
    }
    return currentNumber;

};

// Do not edit below this line
module.exports = fibonacci;
