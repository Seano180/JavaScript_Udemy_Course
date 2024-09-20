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

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// //if we never call the function, the function will never be used, so we call it like below
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// **** Function Declarations vs. Expressions - Tutorial 34 **** /
// There are 2 types of ways to write functions

// Function Declaration method
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1987);
console.log(age1);

// Function Expression method // Jonas preferred method so he can keep all the "const" variables up the top of his code, to make it clean
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1987);
console.log(age2);

// **** Arrow Functions - Tutorial 35 ****
// below is a single parameter arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

// below is a multi parameter function using arrow function method
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 70 - age;
  return `${firstName} can retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1987, "Seano"));
console.log(yearsUntilRetirement(1993, "Rheanna"));

// **** Functions Calling Other Functions - Tutorial 36 ****
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice has ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

// Reviewing Functions - Tutorial 37 ****
const calcAge = function (currentYear, birthYear) {
  return currentYear - birthYear;
};

const yearsUntilRetirements = function (calcAge, firstName) {
  const retirement = 70 - calcAge;
  return `${firstName} is ${calcAge} years old ${
    retirement > 0 ? `can retire in ${calcAge} years` : "has already retired 🎉"
  }`;
};

// Calling the function method and storing the variables
// **** Use this method as it alows you to change arguement inputs e.g. birthYear ****
const finalAge = calcAge(2024, 1900);
const retirementAge = yearsUntilRetirements(finalAge, "Rheanna");
console.log(retirementAge);

// Simply logging the function results to console
console.log(yearsUntilRetirements(calcAge(2024, 1987), "Seano"));
console.log(yearsUntilRetirements(calcAge(2024, 1950), "George"));

// **** Introduction to Arrays - Tutorial 39 ****
const friends = ["Seano", "Rheanna", "Shadow"];
console.log(friends[1]);

// Exercise
const calcAges = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1987, 1993, 2010];

// Option 1 to call an Array
const ages1 = calcAges(years[0]);
const ages2 = calcAges(years[1]);
const ages3 = calcAges(years[2]);
console.log(ages1, ages2, ages3);

// Option 2 to call an Array **** Preferred method ****
const ages = [calcAges(years[0]), calcAges(years[1]), calcAges(years[2])];
console.log(ages);

// **** Basic Array Operations (Methods) - Tutorial 40 ****
// push = add to back of array
// unshift = add to front of array
// pop = remove from back of array
// shift = remove from front of array
// indexOf = returns the position of that expression within the array
// includes = returns (true/false) if that expression exists in the array -- note, this method uses strict equality and not type ceorcion e.g. "23" === 23 (false) string vs. number
const friendz = ["Seano", "Rheanna", "Shadow"];

friendz.push("Kippa");
console.log(friendz);

friendz.unshift("Pat");
console.log(friendz);

friendz.pop(); // no need to declare who to remove -- the end is always removed
console.log(friendz);

friendz.shift(); // no need to declare who to remove -- the front is always removed
console.log(friendz);

// **** Introduction to Objects - Tutorial 42 ****
const seano = {
  firstName: "Seano",
  lastName: "Sheridan",
  age: 2024 - 1987,
  job: "Engineer",
  friends: ["Rheanna", "Patrick", "Kippa"],
};

console.log(seano.job); // calls the specific object value pair

// **** Dot vs. Bracket Notation - Tutorial 43 ****
// Dot Notation
console.log(seano.lastName);
//Bracket Notation
console.log(seano["lastName"]);

// const interestedIn = prompt(
//   "What do you want to know about Seano? Choose between firstName, lastName, age, job, friends"
// );

// if (seano[interestedIn]) {
//   console.log(seano[interestedIn]);
// } else {
//   console.log("Wrong entry --", interestedIn, "is not a valid input");
// }

// Push new properties in to the Object
seano.location = "Australia"; // Dot notation method
seano["loc"] = "Australia"; // Bracket notation method
console.log(seano);

// Challenge - write the below
// "Seano has 3 friends, and his best friend is called Patrick"

// Using Expression method
console.log(
  seano.firstName,
  "has",
  seano.friends.length,
  "friends, and his best friend is called",
  seano.friends[1]
);

// Using Template literals
console.log(
  `${seano.firstName} has ${seano.friends.length} friends, and his best friend is called ${seano.friends[1]}`
);

// **** Object Methods - Tutorial 44 ****
const seanoObject = {
  firstName: "Seano",
  lastName: "Sheridan",
  birthYear: 1987,
  job: "Engineer",
  friends: ["Rheanna", "Patrick", "Kippa"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  // Challenge
  // Write a string that returns "Seano is a 37-year old Engineer, and he has a/no driver's license"
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${
      this.hasDriversLicense === true ? "a" : "no"
    } driver's licence`;
  },
};

console.log(seanoObject.calcAge());
console.log(seanoObject.getSummary());

// **** Iteration: The For Loop - Tutorial 46 ****
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep}`);
}

// **** Looping Arrays, Breaking and Continuing - Tutorial 47 ****
const seanoArray = [
  "Seano",
  "Sheridan",
  2024 - 1987,
  "Engineer",
  ["Rheanna", "Patrick", "Kippa"],
];

for (let i = 0; i < seanoArray.length; i++) {
  console.log(seanoArray[i]);
}


