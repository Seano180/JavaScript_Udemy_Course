// **** Values and Variables - Lecture 10 ****
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.
let country = "Australia";
let continent = "Oceana";
let population = 25000000;

console.log(country);
console.log(continent);
console.log(population);

// **** Data Types - Lecture 11****
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// **** Let, Const and Var - Lecture 12 ****
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.
language = "English";
const cuntry = "Australia";
const cont = "Oceana";
let island = false;
island = true;
console.log(cont);
console.log(island);

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
  " million people speak Australian";
console.log(description1);
