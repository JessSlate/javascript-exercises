const sumAll = function(start, end) {
    let sum = 0;

    if(!(Number.isInteger(start) && Number.isInteger(end))){ //return error with non-number args
        return "ERROR";
    }

    if(end < 0 || start < 0){
        return "ERROR";
    }

    if(end < start){ //works with higher number first
        let temp = end;
        end = start;
        start = temp;
    }

    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
