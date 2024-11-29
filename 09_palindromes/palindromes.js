const palindromes = function (str) {
    let rev = ''; 

    let punctuation = /[\.,?!]/g;
    let newStr = str.replace (punctuation, '');
    let lowerCaseStr = newStr.toLowerCase();
    let noWhiteSpace = lowerCaseStr.split(' ').join('');

    for (let i = noWhiteSpace.length - 1; i >=0; i--){
        rev += noWhiteSpace[i];
    }
    if (rev == noWhiteSpace){
        return true
    } else {
        return false;
    }

};


// Do not edit below this line
module.exports = palindromes;
