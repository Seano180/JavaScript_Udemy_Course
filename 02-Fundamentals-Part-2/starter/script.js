"use strict";

console.log("⭐️⭐️⭐️⭐️⭐️⭐️ Start of Script.js script ⭐️⭐️⭐️⭐️⭐️");

// **** Tutorial 32 - Strict Mode
// In the below example, "hasDriverLicence" is missing the "s" letter - strict mode will highlight this in the console and show us that there is a spelling inconsistency, whereas without strict mode, the code will execute
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive 🙂");

// **** Functions - Tutorial 33 ****
function logger() {
  console.log("My name is Seano180 🚗");
}
// the below text is referred to as "calling", "running" or "invoking" the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//if we never call the function, the function will never be used, so we call it like below
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
