'use strict';

// **** Tutorial 92 - Scope and the Scope Chain ****
// const a = 'Seano';
// first();

// function first() {
//   const b = 'hello';
//   second();

//   function second() {
//     const c = 'hi';
//     third();
//   }
// }

// function third() {
//   const d = 'hey';
//   console.log(d + c + b + a);
// }

// **** Tutorial 93 - Scoping in Practice ****

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const string = `Oh, and you're a millenial, ${firstName}`;
      console.log(string);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3)); // this will work if we turn of "Use Strict"
  }
  printAge();

  return age;
}

const firstName = 'Seano';
calcAge(1987);
