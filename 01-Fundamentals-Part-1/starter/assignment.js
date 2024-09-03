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

// **** Type Conversion and Coercion - Tutorial 20 ****
// Predict the result of these 5 operations without executing them:
console.log("9" - "5"); // -> ? answer = 4
console.log("19" - "13" + "17"); // -> ? answer = 617
console.log("19" - "13" + 17); // -> ? answer = 23
console.log("123" < 57); // -> ? answer = false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? answer = 1143

// **** Equality Operators == vs. ==== Tutorial 22 ****
// Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.
// **CODE BELOW IS COMMENTED OUT **

/* const numNeighbours = Number(
  prompt("How many neighbours does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 Border");
} else if (numNeighbours > 1) {
  console.log("More than 1 Border");
} else {
  console.log("No Borders");
}
*/

// **** Logical Operators - Tutorial 24 ****
// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

if (language === "English" && population < 50000000 && isIsland) {
  console.log("You should live in Australia");
} else {
  console.log("Australia does not meet your criteria 😋");
}

// **** Coding Challenge 3 ****
// here are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
const scoreDolphins = (96 + 108 + 89) / 3; //average = 97.66

const scoreKoalas = (88 + 91 + 110) / 3; //average = 96.33

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphin's win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koala's win the trophy 🏆");
} else {
  console.log("Both Dolphin's & Koala's win the trophy 🏆");
}
