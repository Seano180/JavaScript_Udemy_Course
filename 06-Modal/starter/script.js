'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-model');

const btnShowModal = document.querySelectorAll('.show-modal');

console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
}
