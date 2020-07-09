/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/

// This is the first solution which has been simplified.

function safeLevels(arrStr) {
  //first solution
  let levelNumber = arrStr.map((level) => {
    let removingPercentage = level.replace("%", ""); //you can also use level.substring(0, 4);
    let stringToNumber = parseFloat(removingPercentage);
    return stringToNumber;
  });
  let findOxyArray = levelNumber.find(
    (findOxy) => findOxy > 19.5 && findOxy < 23.5
  );
  return findOxyArray + "%";

  /* refactored solution*/
  /* return levels.find(percent => {
  let number = Number(percent.substring(0, percent.length - 1));
  return number > 19.5 && number < 23.5;
  })*/
}

//Another Solution for this exercise

function safeLevels(arrStr) {
  let levelNumber = arrStr.map((level) => {
    let removingPercentage = level.substring(0, 4);
    let stringToNumber = Number(removingPercentage);
    return stringToNumber 
  })
  let findOxyArray = levelNumber.find(findOxy => findOxy > 19.5 && findOxy < 23.5)
  return findOxyArray + "%" 
}

//Different Solution is below, find function contain the checking. Substring extract from the 0 index of the string and the last in the string then it was changed to number by applying Number(), then we put the logic as the following at the return statement.

// function safeLevels(levels) {
//   return levels.find(percent => {       
//     let number = Number(percent.substring(0, percent.length - 1));   
//     return number > 19.5 && number < 23.5;
//   })
// }

/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

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
  "safeLevels function works - case 2",
  safeLevels(oxygenLevels1) === "19.9%"
);

test(
  "safeLevels function works - case 2",
  safeLevels(oxygenLevels2) === "20.2%"
);
