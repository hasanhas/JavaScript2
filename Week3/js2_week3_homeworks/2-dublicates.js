'use strict';

// Write a function called removeDuplicates, that takes in an array as an argument:
// const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// The function should remove duplicate letters. So the result should be:
// letters === ['a', 'b', 'c', 'd', 'e', 'f'];


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const removeDuplicates = letters => {
  const fixLetters = {};
  return letters.filter(figure => (fixLetters.hasOwnProperty(figure) ? false : (fixLetters[figure] = true)));
};
console.log(removeDuplicates(letters));