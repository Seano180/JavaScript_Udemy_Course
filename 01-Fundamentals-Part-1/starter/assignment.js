console.log("⭐️⭐️⭐️⭐️⭐️⭐️ Start of Assignment.js script ⭐️⭐️⭐️⭐️⭐️");
// **** Values and Variables - Lecture 10 ****
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.
const country = "Australia";
const continent = "Oceana";
let population = 25000000;

console.log(country);
console.log(continent);
console.log(population);

// **** Data Types - Lecture 11****
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.
const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// **** Let, Const and Var - Lecture 12 ****
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.
const language = "English";
const cuntry = "Australia";
const cont = "Oceana";
// const island = false;
// island = true;
// console.log(cont);
// console.log(island);

// **** Basic Operators - Lecture 13 ****
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000); // true
console.log(population < 33000000); // true
const description1 =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

// **** Coding Challenge #1 ****
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI); // Boolean value = "true"

// **** Strings and Template Literals - Tutorial 17 ****
// Recreate the description variable from the last assignment, this time using the template literal syntax.

console.log(
  `${country} is in ${continent} and it's ${population} million people speak ${language}`
);

// **** Taking Decisions: If / Else Statements - Tutorial 18 ****
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
if (population > 33000000) {
  const popRemaining = 33000000 - population;
  console.log(`Australia's population is ${popRemaining} below average`);
} else {
  console.log("Your population must continue to grow");
}

// **** Coding Challenge #2 ****
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.
if (bmiMark > bmiJohn) {
  const bmiDifference1 = bmiMark - bmiJohn;
  console.log(
    `Mark's BMI is ${bmiDifference1} higher than John's BMI of ${bmiJohn}`
  );
} else {
  const bmiDifference2 = bmiJohn - bmiMark;
  console.log(
    `John's BMI is ${bmiDifference2} lower than Mark's BMI of ${bmiMark}`
  );
}

// **** Type Conversion and Coercion - Tutorial 20
// Predict the result of these 5 operations without executing them:
console.log("9" - "5"); // -> ? answer = 4
console.log("19" - "13" + "17"); // -> ? answer = 617
console.log("19" - "13" + 17); // -> ? answer = 23
console.log("123" < 57); // -> ? answer = false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? answer = 1143
