const leapYears = function(year) {
    if(year % 4 == 0){ //leap years are divisible by four
        if(year % 100 == 0 && !(year % 400 == 0)){ //leap years are not divisible by 100, unless also divisible by 400
            return false;
        }
        else return true;
    } else return false;

};

// Do not edit below this line
module.exports = leapYears;
