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

const number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No number entered!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = 'green';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is 📈 too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over ⛔️';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is 📉 too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over ⛔️';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});
