'use strict';

// Declare a function called createBase. It should return a closure, that adds a number to the base number argument.
// Call the function three times. The return values should be:
// 15
// 24
// 36
// It should look a little like this:
// function createBase() {
//   // Put here your logic...
// }
// const addSix = createBase(6);
// // Put here your function calls...
// addSix();

function createBase(x) {
  return function addSix(y) {
    return x + y;
  };
}

const addNumber = createBase(-1);

console.log(addNumber(2));
console.log(addNumber(3.3));
console.log(addNumber(44));

