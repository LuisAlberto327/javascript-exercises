const palindromes = function (str) {
    const myArray = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    let strLowerCased = str.toLowerCase();
    const strToArray = strLowerCased.split("");
    for(let i=0;i<=(strToArray.length-1);i++){
      if(alphabet.includes(strToArray[i])){
        myArray.push(strToArray[i])
      }
    }
    const arrayReversed = myArray.toReversed();
    let resultOne = myArray.join("");
    let resultTwo = arrayReversed.join("");
    if(resultOne==resultTwo) return true;
    else return false;
  };

// Do not edit below this line
module.exports = palindromes;
