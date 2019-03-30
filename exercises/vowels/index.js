// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ############## Second Solution ################
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   let lowerCaseStr = str.toLowerCase();
//
//   for(let char of lowerCaseStr) {
//     if(vowels.includes(char)) {
//       counter++;
//     }
//   }
//   return counter;
// }

// ############## First Solution ################
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   let lowerCaseStr = str.toLowerCase();
//   console.log(lowerCaseStr);
//
//   for(let char of lowerCaseStr) {
//     for(let vowel of vowels) {
//       if(char === vowel) {
//         counter++
//       }
//     }
//   }
//   return counter;
// }


module.exports = vowels;
