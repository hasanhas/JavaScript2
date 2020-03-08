
'use strict';

// In this exercise you'll be presented with a code snippet. Your task is to guess the 
// output and write out your reasoning in 50 words or less.

// // Snippet
// let a = 10;
// const x = (function() {
//   a = 12;
//   return function() {
//     alert(a);
//   };
// })();
// x();

//////////////////////////////

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();


// First line declares "a" with the value of 10.
// Second line creates the x function. This function that executes as soon as it is defined.
// Because It is the IIFE (Immediately Invoked Function Expression).
// At the end of function there is parenthesis.It means that it is created immediately .
// Then "a" becomes 12.
// After that the closure function begins. It uses the inner values.
// So it alerts as 12 in the browser.
