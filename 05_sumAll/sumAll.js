const sumAll = function(a, b) {
    let finalSum = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    for (let i = min; i <= max; i++) {
        finalSum += i;
} 
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number" 
        || !Number.isInteger(a) || !Number.isInteger(b)
    ){
        return `ERROR`  
    } else return finalSum
}
// Do not edit below this line
module.exports = sumAll;
