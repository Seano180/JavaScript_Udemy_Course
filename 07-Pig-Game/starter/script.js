'use strict';

// Selecting Elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

//Start new game - by refreshing page
newGame.addEventListener('click', function () {
  location.reload();
});

score0Element.textContent = 0;
score1Element.textContent = 0;

diceElement.classList.add('hidden');

const scores = [0, 0]; //player1 , player2
let currentScore = 0;
let activePlayer = 0;
let playing = true; // to stop the game when a winner is selected

const togglePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayer0.classList.toggle('player--active');
  activePlayer1.classList.toggle('player--active');
};

// **** Tutorial 83 ****
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    //3. check for roll 1: if true, switch to next player
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player
      togglePlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    // 1. first add current score to the score of the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      // 3. if so, finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      // 4. else, switch to the next player
      togglePlayer();
    }
  }
});
