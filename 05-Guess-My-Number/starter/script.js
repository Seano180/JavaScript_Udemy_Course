'use strict';

// . for class
// # for ID

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '1';

// document.querySelector('.guess').value = '22';

// console.log(document.querySelector('.guess').value);

// **** Tutorial 73 - Handling Click Events ****
let score = 20;
let highscore = 0;

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no number input
  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No number entered!';

    // When guess is correct
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';

    //**** Tutorial 77 - Implementing High Scores ****
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is 📈 too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over ⛔️';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#D2042D';
      document.querySelector('.number').style.width = '30rem';
    }

    // When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is 📉 too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over ⛔️';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#D2042D';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

// **** Challenge ****
// Reset the entire DOM back to the default
// NOTE: We cant use "location.reload()" to reset the entire page because then we would lose the Highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  console.log(number);
});
