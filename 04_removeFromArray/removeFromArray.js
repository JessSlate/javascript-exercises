const removeFromArray = function(array, ...elementsToRemove) {

    for (const args of elementsToRemove){
        for (const element in array){
            if(array[element] === args){
                array.splice(element, 1);
            }
        }
    }
        return array;

};

console.log(removeFromArray([1, 2, 3, 4], "3"));

// Do not edit below this line
module.exports = removeFromArray;
