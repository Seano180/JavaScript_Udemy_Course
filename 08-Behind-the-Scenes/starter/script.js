'use strict';

// **** Tutorial 92 - Scope and the Scope Chain ****
const a = 'Seano';
first();

function first() {
  const b = 'hello';
  second();

  function second() {
    const c = 'hi';
    third();
  }
}

function third() {
  const d = 'hey';
  console.log(d + c + b + a);
}

// ***
