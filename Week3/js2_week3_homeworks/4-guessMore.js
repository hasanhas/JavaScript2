'use strict';

// In this exercise you'll be presented with another code snippet. 
// Guess the output and write out your reasoning in 50 words or less.

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);


// When we use in the first function value 9, it makes x as 10, but this doesn't change or reassign the value of x as 10, x stays as 9.
// But in the second case f2(y) function creates y={x:9} as an object.
// there is a mutating situation here. It is being placed with reference so when we assign  variable with a value it affects the place where it is in
// The new value of x becomes 10 and because of this also it is again being mutated as 10 in (y) function
// console log (y) becomes 10
