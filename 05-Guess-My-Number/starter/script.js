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
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No number entered!';
  }
});
