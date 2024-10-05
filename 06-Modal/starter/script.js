'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnShowModal = document.querySelectorAll('.show-modal');

// console.log(btnShowModal);

const showModal = function () {
  // the modal window was hidden using the class in the .HTML file which was defined in the CSS
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', showModal);

// Created the function below because closing modal by clicking the "X" or clicking outside of the modal, uses the same code
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// function to remove both the overlay and the modal window by clicking the "X" button
btnCloseModal.addEventListener('click', closeModal);

// function to remove the overlay and the modal window by clicking OUTSIDE of the modal window
overlay.addEventListener('click', closeModal);

// **** Tutorial 81 - Handling the ESC keypress
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
