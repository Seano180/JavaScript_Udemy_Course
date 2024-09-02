console.log("⭐️⭐️⭐️⭐️⭐️⭐️ Start of Script.js script ⭐️⭐️⭐️⭐️⭐️");
let js = "amazing";
// if (js === "amazing") alert("Javascript is fun");

console.log(21);

console.log(null);

let age = 30;
age = 31;
console.log(age);

const birthYear = 1987;
console.log(birthYear);

// Math Operators - Tutorial 13
const ageSean = 2024 - 1987;
const ageRheanna = 2024 - 1993;
console.log(ageSean, ageRheanna);

console.log(ageSean * 2, ageSean * 2 ** 3);
// 2 ** 3 is essentially 2 ^ 3;

const firstName = "Sean";
const lastName = "Sheridan";
console.log(firstName + " " + lastName);

// Assingment Operators - Tutorial 13
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = (25 * 4 = 100)
x++; // = x + 1 = 101
x--; // x - 1 = 100
console.log(x);

// Comparison Operators - Tutorial 13
console.log(ageSean > ageRheanna); // >, <. >=, <=

// Strings & Template Literals - Tutorial 17
const job = "Student";

console.log(
  "I'm " +
    firstName +
    " and I am " +
    ageSean +
    " years old and my job is a " +
    job
); // this is a very old way of doing things in JavaScript, the new ES6 makes this easier

const seanNew = `I'm ${firstName} and I am ${ageSean} years old and my job is a ${job} -- This string method uses Template Literals which is new in ES6`;

console.log(seanNew);

// old method using quotation marks
console.log(
  "String with \n\
  multiple \n\
  lines"
);
// new method using back ticks - ES6 onwards
console.log(`Sring with
  multiple
  lines`);

// Taking Decisions: If / Else Statements - Tutorial 18
const drivingAge = 15;

if (drivingAge >= 18) {
  console.log("Sarah can start driving 🥰");
} else {
  const yearsLeft = 18 - drivingAge;
  console.log(
    `Sarah is not old enough to drive. Please wait ${yearsLeft} years to drive 😇.`
  );
}
// Example using birthYear defined above, the below is just for visualisation
// const birthYear = 1987;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`You were born in the ${century}th century.`);

// Type Conversion - Tutorial 20
const inputYear = "1991"; // this logs 1991 as a string not a number
console.log(Number(inputYear), inputYear); // this compares the conversion number to the string
console.log(Number(inputYear) + 18); // this conversion results in numbers that can be added

console.log(Number("Seano")); // result = NaN
console.log(typeof NaN); // result = number (NaN is considered a number)

console.log(String(23), 23); // result shows String versus number

// Type Coercion - Tutorial 20
console.log("I am " + 37 + " years old"); // JavaScript auto changes the number 37 to text
console.log("23" - "10" - 3); // JavaScript converts "minus" to numbers, where as with "plus it adds the text string together"
console.log("23" / "2"); // JavaScript will turn these strings to numbers because you cannot divide a string
console.log("23" * "2"); // JavaScript will turn these strings to numbers because you cannot multiply a string

// Truthy & Falsy values - Tutorial 21
// ** the 5 Falsy values are: 0, "", undefined, null, NaN

console.log(Boolean(0)); //JavaScript sees the number 0 as false when using Boolean (this is relevant for the if statement below)
console.log(Boolean(undefined));
console.log(Boolean("Seano"));
console.log(Boolean({}));
console.log(Boolean(""));

//example IF statement - to prove that the number 0 = false
const money = 0;
// JavaScript will try to convert money to Boolean, in this case 0 = false
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You have no money, get a job 😂");
}

// ** the 5 Truthy values are:
