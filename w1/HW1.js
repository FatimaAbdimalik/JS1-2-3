/*we will have it on gist github
share it with all
*/

//#region Concepts

/*
1-what they want
2-input
3-output
4-logic
5-test
*/
//#endregion
//#region Mandatory

//#region Ex1_solved
// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
  return a + b + c;
}

function introduceMe(name, age) {
  //Don't need () around return, only when multi lines
  return `Hello, my name is ${name} and I am ${age} years old`;
}

function getRemainder(a, b) {
  const remainder = a % b;
  //String interpolation= easy to read,speed and memory save in case of many lines
  // Use string interpolation here
  return `The remainder is ${remainder}`;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("fixed addNumbers function - case 1", addNumbers(3, 4, 6) === 13);
test(
  "fixed introduceMe function",
  introduceMe("Sonjide", 27) ===
    "Hello, my name is Sonjide and I am 27 years old"
);
test(
  "fixed getRemainder function",
  getRemainder(23, 5) === "The remainder is 3"
);
//#endregion
////////////////////////////////////////////////////////////

//#region Ex2_solved
// The syntax for this function is valid but it has an error, find it and fix it.

//method is a function
function trimWord(word) {
  return word.trim();
}

//property is  a value
function getWordLength(word) {
  return word.length;
}

function multiply(a, b, c) {
  return a * b * c;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "fixed trimWord function",
  trimWord("  CodeYourFuture ") === "CodeYourFuture"
);
test(
  "fixed wordLength function",
  getWordLength("A wild sentence appeared!") === 25
);
test("fixed multiply function", multiply(2, 3, 6) === 36);
//#endregion
//////////////////////////////////////////////////////////

//#region Ex3_solved
// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10;
}
// this Math Random returns a random number between 0 and 1(excluded), as float number

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}
// this concat concatenates strings and put them together

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return firstWord.concat(" ", secondWord, " ", thirdWord);
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("code", "your", "future") === "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza") === "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13) === "I am 13"
);
//#endregion Ex3_solved
//////////////////////////////////////////////////////////

//#region Ex4_solved
/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(productBeforeTax) {
  const salesTax = productBeforeTax * 0.2;

  const priceWithTax = productBeforeTax + salesTax;

  return priceWithTax;
}
console.log(calculateSalesTax(50));
/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00
  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function formatCurrency(unFormatedPrice) {
  const price = calculateSalesTax(unFormatedPrice);
  //toFixed is number method, convert to string with amount of decimal
  return "£" + price.toFixed(2);
}
console.log(formatCurrency(300));

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15) === 18);
test(
  "calculateSalesTax function - case 2 works",
  calculateSalesTax(17.5) === 21
);
test(
  "calculateSalesTax function - case 3 works",
  calculateSalesTax(34) === 40.8
);

test("formatCurrency function - case 1 works", formatCurrency(15) === "£18.00");
test(
  "formatCurrency function - case 2 works",
  formatCurrency(17.5) === "£21.00"
);
test("formatCurrency function - case 3 works", formatCurrency(34) === "£40.80");
//#endregion Ex4_solved
//////////////////////////////////////////////////////////

//#region Ex5_solved
/**
Let's peer into the future using a Magic 8 Ball!
https://en.wikipedia.org/wiki/Magic_8-Ball 
There are a few steps to being able view the future though:
* Ask a question
* Shake the ball
* Get an answer
* Decide if it's positive or negative
The question can be anything, but the answers are fixed,
and have different levels of positivity or negativity.
Below are the possible answers:
## Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.
## Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.
## Negative
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.
## Very negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.
let possibleAnswers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",

  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",

  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",

  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function shakeBall() {
  //floor as array index start from 0, length from 1
  let answer =
    possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  console.log(`The ball has shaken!`);
  return answer;
}

// The answer should come from shaking the ball
let answer = shakeBall();

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
  let answerIndexinList = possibleAnswers.indexOf(answer);
  if (answerIndexinList <= 4) {
    return `very positive`;
  } else if (answerIndexinList > 4 && answerIndexinList <= 9) {
    return `positive`;
  } else if (answerIndexinList > 9 && answerIndexinList <= 14) {
    return `negative`;
  } else {
    return "very negative";
  }
}

/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function () {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();
//#endregion Ex5_solved
//////////////////////////////////////////////////////////

//#region Ex1_e_solved
/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(amountInPound) {
  const ConvertedPrice = 1.4 * amountInPound;
  return ConvertedPrice;
}

/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToBRL(amountInPound) {
  const convertedPrice = 5.7 * amountInPound;
  //convertedPrice=addFee(convertedPrice)
  return convertedPrice;
}
function addFee(amount) {
  const fee = 0.01;
  const amountWithFee = amount * (1 + fee);
  return amountWithFee;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("convertToUSD function works", convertToUSD(32) === 44.8);
test("convertToBRL function works", convertToBRL(30) === 172.71);
//#endregion Ex1_e_solved
//////////////////////////////////////////////////////////

//#region Ex2_e_solved

/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)
  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(num1, num2) {
  //good practice to store it in variable first, if it's complicated
  return (num1 * 10 + num2 * 10) / 10;
  // the fix above is valid,
  //you can use parse float: rtead here about it :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  //numbers in Js are treated as decimal floating numbers
  //Here you can read more about it
  //http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
}

function multiply(num1, num2) {
  return num1 * num2;
}

function format(num) {
  return "£" + num;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
let badCode = format(multiply(add(startingValue, 10), 2));
//complicated to read, hard to debug, hard to upgrade

/* BETTER PRACTICE */

//either new functions, or set of variables
let addedAmount = add(stringExample, 10);
let multiplayedAmount = multiply(addedAmount, 2);
let goodCode = format(multiplayedAmount);

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("add function - case 1 works", add(1, 3) === 4);
test("add function - case 2 works", add(2.4, 5.3) === 7.7);
test("multiply function works", multiply(2, 3) === 6);
test("format function works", format(16) === "£16");
test("badCode variable correctly assigned", badCode === "£24");
test("goodCode variable correctly assigned", goodCode === "£24");
//#endregion Ex2_e_solved

//#endregion
