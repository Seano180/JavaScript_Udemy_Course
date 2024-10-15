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

      // function add(a, b) {
      //   return a + b;
      // }
    }
    // console.log(add(2, 3)); // this will work if we turn of "Use Strict"
  }
  printAge();

  return age;
}

const firstName = 'Seano';
calcAge(1987);

// **** Tutorial 95 - Hoisting and TDZ in Practice ****

// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Seano';
let job = 'Student';
const year = 1987;

// Hoisting with Functions
// console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// **** This Keyword in Practice - Tutorial 97 ****
console.log(this);

const calcAges = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAges(1987);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(1987);

const seano = {
  year: 1987,
  calcAges: function () {
    console.log(this);
  },
};
seano.calcAges();

// Method borrowing
const matilda = {
  year: 2016,
};
matilda.calcAges = seano.calcAges;
matilda.calcAges();
// console.log(matilda);

const f = seano.calcAges;
f();

// **** Regular vs. Arrow Functions - Tutorial 98 ****

const seanos = {
  firstName: 'Seano',
  year: 1987,
  calcAgez: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
seanos.calcAgez();
