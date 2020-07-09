/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
//regex= regular expression

function tidyUpString(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].trim();
    strArr[i] = strArr[i].replace("/", "");
    strArr[i] = strArr[i].toLowerCase();
  }
  //Different solution let arr = strArr.map((p) => p.trim().toLowerCase().replace("/", ""));

  return strArr;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof num === "number" && num % 2 === 0 && num <= 100) {
    return true; // isNaN instead of number,
    // in the test cases it will pass but worth understanding isNaN don't take type
  } else {
    return false;
  }
}

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, index) {
  //no changes, using slice only
  var newArr = arr.slice(0, index).concat(arr.slice(index + 1));
  //another way is to use loop and push to new array
  // the following won't work,splice is destructive
  // someArray.slice(0, x).concat(someArray.slice(-x));
  // var newArr = arr;
  // newArr.splice(index, 1); // remove from the index and one item

  return newArr; // complete this statement
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      arr[i] = 100;
    }

    //we've fallen again in number floating issue
    //possible answers
    //Number(arr(i).toFixed(2)) as Number is wrapping object that convert what's inside to number an to fixed here is the one converting things to right style
    //parseFloat can be used parseFloat((arr[i]).toFixed(2));
    //easy fix is  arr[i].toFixed(2) * 100 / 100;
    arr[i] = Math.round(arr[i] * 100) / 100; //Math.round is possilbe solution if we are considering rounding
    arr[i] = arr[i].toString();
    arr[i] = arr[i].concat("%");
  }

  //You can also use filter map to change 100 to a hundered, and then do same stuff
  /* var newArr = arr
    .map(function (p) {
      if (p > 100) {
        return 100;
      } else {
        return p;
      }
    })
    .map((p) => (p.toFixed(2) * 100) / 100 + "%");
     return newArr;
 */
  return arr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

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
  "tidyUpString function works - case 1",
  arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
    "daniel",
    "irina",
    "gordon",
    "ashleigh",
  ])
);
test(
  "tidyUpString function works - case 2",
  arraysEqual(
    tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  )
);

test("validate function works - case 1", validate(10) === true);
test("validate function works - case 2", validate(18) === true);
test("validate function works - case 3", validate(17) === false);
test("validate function works - case 4", validate("Ten") === false);
test("validate function works - case 5", validate(108) === false);

test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
);
test(
  "remove function works - case 2",
  arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ])
);
test(
  "remove function works - case 3",
  arraysEqual(remove([1, 2, 1, 1, 1], 1), [1, 1, 1, 1])
);
test(
  "remove function works - case 4",
  arraysEqual(remove([0, 1, 2], 3), [0, 1, 2])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%",
  ])
);
