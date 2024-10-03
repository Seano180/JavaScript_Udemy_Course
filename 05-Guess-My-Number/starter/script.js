'use strict';

// . for class
// # for ID

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 🎉';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '1';

document.querySelector('.guess').value = '22';

console.log(document.querySelector('.guess').value);
