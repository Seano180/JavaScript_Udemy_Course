'use strict';

// Selecting Elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;

diceElement.classList.add('hidden');

let currentScore = 0;

// **** Tutorial 83 ****
buttonRoll.addEventListener('click', function () {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  //3. check for roll 1: if true, switch to next player
  if (dice !== 1) {
    currentScore = currentScore + dice;
    current0Element.textContent = currentScore;
  } else if (dice === 1) {
    currentScore = 0;
    current0Element.textContent = currentScore;
  }
});
