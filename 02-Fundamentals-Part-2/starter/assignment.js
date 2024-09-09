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
