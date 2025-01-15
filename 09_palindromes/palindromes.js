/*

const palindromes = function (str) {
    let newStr = str.toString;
    return newStr
        .filter ((word) => word.toString().replace(/[\.,?!]/g, '').split('').reverse().join('') === word);
}


*/

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
    } 
/*

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}


let words = ['pop','poppy','detartrated','detartratedx', '', 'p', 'pp'];

function filterPalindromes(list) {
  return words.filter((word) => {
    for(var i = 0; i < word.length / 2; i++) {
      if(word[i] !== word[word.length - 1 - i])
        return false;
    }
    return true;
  });
}

console.log('result', filterPalindromes(words));

process.exit();


toString().toLowerCase().replace(/[\.,?!]/g, '').split('').join('');
let arr = ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat']

let palindromes = arr.filter(word => word.split('').reverse().join('') === word)

console.log(palindromes)


/*

const palindromes = function (str) {
    return str ! === /[\.,?!]/g;
}

const palindromes = function (str) {
    const cleanStr = str.toString().toLowerCase().replace(/[\.,?!]/g, '').split('').join('');
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr ? true : false; 
}



/*

        .filter((word) => word !== "!"); //filter out no 

const palindromes = function (pal) {
    let str = pal
        .toLowerCase()
        .split('')
        .reverse()
        .join ('');
    return pal === str ? true : false; 
}
*/





// function sumOfTripledEvens(array) {
//     return array
//       .filter((num) => num % 2 === 0)
//       .map((num) => num * 3)
//       .reduce((acc, curr) => acc + curr);
//   }
  



// const palindromes = function (str) {
//     let rev = ''; 

//     let punctuation = /[\.,?!]/g;
//     let newStr = str.replace (punctuation, '');
//     let lowerCaseStr = newStr.toLowerCase();
//     let noWhiteSpace = lowerCaseStr.split(' ').join('');

//     for (let i = noWhiteSpace.length - 1; i >=0; i--){
//         rev += noWhiteSpace[i];
//     }
//     if (rev == noWhiteSpace){
//         return true
//     } else {
//         return false;
//     }

// };

// Do not edit below this line
module.exports = palindromes;
