// Playing computer
//
// Aim: to understand and predict the answers of loops, and if statmetns
//
// You need write the answers of the below questions  1-7

/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

   1. This program throws an error. Why? (If you can't find it, try executing it).
      b is not define
  2. Remove the line that throws the error.
      console.log(b);
  3. What is printed to the console?
      x = 2;
      a = 6;
      d = 4, 6, 8
      e = 9,13
  4. How many times is "f1" called?
      two times
  5. How many times is "f2" called?
      three times
  6. What value does the "a" parameter take in the first "f1" call?
     The question was a bit ambigious here, so if you meant the paramter in function f1 which reflect i as argument, then 1
     if you meant the a argument that passed to the function f1 as paramter b, then it's 8
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
 a bit ambigious here also, so if you meant the outer of if condition in function f1 which reflect i as argument, then 1
     if you meant the a argument that passed to the function f1 as paramter b, then it's 8
    */

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
