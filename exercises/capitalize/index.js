// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// ############# Third Solution #################
function capitalize(str) {
  let capitalizedStr = '';

  for(let char = 0; char < str.length; char++) {
    if(char === 0 || str[char - 1] === ' ') {
      capitalizedStr += str[char].toUpperCase();
    }
    else {
      capitalizedStr += str[char];
    }
  }
  return capitalizedStr;
}

// ############# Second Solution #################
// function capitalize(str) {
//   const words = [];
//
//   for(let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

// ############# First Solution #################
// function capitalize(str) {
//
//   let strArray = str.split('');
//
//   for(let i = 0; i < strArray.length; i++){
//     if(i === 0){
//       strArray[i] = strArray[i].toUpperCase();
//     }
//     else if (strArray[i] === ' ') {
//       strArray[i + 1] = strArray[i + 1].toUpperCase();
//     }
//   }
//   return strArray.join('');
// }

module.exports = capitalize;
