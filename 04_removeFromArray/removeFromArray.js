const removeFromArray = function(array, ...itemsToRemove){
    for (let i = array.length - 1; i >= 0; i--){
        let currentElement = array[i];
        if (itemsToRemove.includes(currentElement)){
            array.splice(i, 1);
        };
    }
    return array
}


// Do not edit below this line
module.exports = removeFromArray;
