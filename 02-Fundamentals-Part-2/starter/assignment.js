"use strict";
console.log("⭐️⭐️⭐️⭐️⭐️⭐️ Start of Assignment.js script ⭐️⭐️⭐️⭐️⭐️");

// **** Functions - Tutorial 33 ****
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
function describeCountry(country, population, capitalCity) {
  const countryInfo = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return countryInfo;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
const australia = describeCountry("Australia", 25, "Canberra");
console.log(australia);
const america = describeCountry("America", 200, "Washington D.C");
console.log(america);

// **** Function Declarations vs. Expressions - Tutorial 34 ****
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

// Function Declaration
const worldPopulation = 7900000000;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const aussie1 = percentageOfWorld1(25000000);
console.log(aussie1);
const greece1 = percentageOfWorld1(11000000);
console.log(greece1);
const malta1 = percentageOfWorld1(500000);
console.log(malta1);

// Function Expressions
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const aussie2 = percentageOfWorld2(25000000);
console.log(aussie2);
const greece2 = percentageOfWorld2(11000000);
console.log(greece2);
const malta2 = percentageOfWorld2(500000);
console.log(malta2);

// **** Arrow Functions - Tutorial 35 ****
// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
//
const aussie3 = percentageOfWorld3(25000000);
console.log(aussie2);
const greece3 = percentageOfWorld3(11000000);
console.log(greece3);
const malta3 = percentageOfWorld3(500000);
console.log(malta3);

// **** Functions Calling Other Functions - Tutorial 36 ****
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} people, which is about ${percentage} of the world!`;
  console.log(description);
};

describePopulation("Holland", 18000000);
describePopulation("England", 56000000);
describePopulation("Ireland", 5000000);

// **** Coding Challenge 5 ****
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//Test Data 1
let scoreDolphins1 = calcAverage(44, 23, 71);
let scoreKoalas1 = calcAverage(65, 54, 49);
console.log(scoreDolphins1, scoreKoalas1);

//Test Data 2
let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);
console.log(scoreDolphins2, scoreKoalas2);

// Note -- team can only win if its score is DOUBLE the other teams score
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins 🙂");
  }
};
checkWinner(scoreDolphins1, scoreKoalas1); // Test Data 1
checkWinner(scoreDolphins2, scoreKoalas2); // Test Data 2

// **** Introduction to Arrays - Tutorial 39 ****
// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
const pop = [125000000, 6500000, 5500000, 23000000];
console.log(pop.length === 4);

const percentages = [
  percentageOfWorld1(pop[0]),
  percentageOfWorld1(pop[1]),
  percentageOfWorld1(pop[2]),
  percentageOfWorld1(pop[3]),
];
console.log(percentages);

// **** Basic Array Operations (Methods) - Tutorial 40 ****
// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
const neighbours = ["Australia", "New Zealand", "Fiji"];
console.log(neighbours);

neighbours.push("Utopia"); // add new country Utopia
console.log(neighbours);

neighbours.pop(); // doesnt require an input to remove the last item
console.log(neighbours);

// check if the Array contains Germany
if (neighbours.includes("Germany")) {
  console.log("Array includes Germany");
} else {
  console.log("Probably not a central european country :D");
}

// Find and replace 1 of the countries from within the Array with a nearby country
console.log(neighbours.indexOf("New Zealand"));
neighbours[1] = "Vanuatu";
console.log(neighbours);

// **** CODING CHALLENGE 6 ****
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// 1 - Create the function
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// 2 - create a Bills array
const bills = [125, 555, 44];
console.log(calcTip(bills[0])); // call the function and check a single array

// 3 - create an array called Tips to calc the tip for each bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// 4 - BONUS - create an array that totals the bills + tip
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
