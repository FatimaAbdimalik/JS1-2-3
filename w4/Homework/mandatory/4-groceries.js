/*
As you you can have an Array of Objects, you can also store Arrays in Objects.
In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access Array stored inside Object.
 - How to access to a specific property of an array and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients to your menus. It is stored in the "weeklyMealPlan" object.

Complete the exercises below.
*/

// Here is your
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  fridray: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: ["mongouse"],
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weakly ingredients into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];

//Solution 1 for/in loop
for (let day in weeklyMealPlan) {
  weeklyGroceriesToBuy = weeklyGroceriesToBuy.concat(weeklyMealPlan[day]);
  // you can also create small loop / or foreach here if you don't want to use contact like:
  // weeklyMealPlan[day].forEach((p) => weeklyGroceriesToBuy.push(p));
}
//Solution 2 using Array methods and built in object method
// Object.keys(weeklyMealPlan).forEach((key) => {
//   let dailyMealPlan = weeklyMealPlan[key];
//   dailyMealPlan.forEach((ingredient) => weeklyGroceriesToBuy.push(ingredient));
// });

// console.log(weeklyGroceriesToBuy);


// /*
// Exercise 2:
//   Loop through your list again, but now only collect the weekend items into the weeklyGroceriesToBuy array.
//   Then use console.log() to print out the list.
// */
// // Gather weekend item names into this array
let weekendGroceriesToBuy = [];
// let weekends = ["saturday", "sunday"];
//Solution 1 for/in loop
// for (let day in weeklyMealPlan) {
//   if (weekends.includes(day)) {
//     weekendGroceriesToBuy = weekendGroceriesToBuy.concat(weeklyMealPlan[day]);
//   }
// }
//Solution 2 using Array methods and built in object method
console.log(Object.keys(weeklyMealPlan));

// Object.keys(weeklyMealPlan)
//   .filter((key) => weekends.includes(key))
//   .forEach((key) => {
//     let dailyMealPlan = weeklyMealPlan[key];
//     dailyMealPlan.forEach((ingredient) =>
//       weekendGroceriesToBuy.push(ingredient)
//     );
//   });

console.log(weekendGroceriesToBuy);

//Solution 3. 
for (let day in weeklyMealPlan) {
  if (day === "saturday" || day === "sunday") {
    weeklyMealPlan[day].forEach((ingredients) => {
      weekendGroceriesToBuy.push(ingredients);
    });
  }
}
console.log(weekendGroceriesToBuy);

/*
Exercise 2:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy per each day
    - and update the corresponding properties of numberOfItemsPerWeak object.

  Finally use console.log() to print out the Object.
*/
// Gather weekend item names into this object
let numberOfItemsPerWeak = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  fridray: 0,
  saturday: 0,
  sunday: 0,
};

//Solution 1 for/in loop
for (let day in numberOfItemsPerWeak) {
  numberOfItemsPerWeak[day] = weeklyMealPlan[day].length;
}
//Solution 2 using Array methods and built in object method
// Object.keys(weeklyMealPlan).forEach((key) => {
//   let dailyMealPlan = weeklyMealPlan[key];
//   numberOfItemsPerWeak[key] = dailyMealPlan.length;
// });

console.log(numberOfItemsPerWeak);