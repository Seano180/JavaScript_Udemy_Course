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
