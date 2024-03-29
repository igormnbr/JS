'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModalBtns.length; i++)
  showModalBtns[i].addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);
