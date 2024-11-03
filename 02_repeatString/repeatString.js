

const repeatString = function (str, times) {
    let result = ''
    for (let i = 0; i < times; i++) {
        result += str;
    }
    if (times < 0) {
        return `ERROR`;
    } else {
        return result
    }
    
};


//parameters include the string to be repeated and the number to number of times the string will be repeated
//usign array to give the words to be repeated and the repeat times to repeat the word

// Do not edit below this line
module.exports = repeatString;
