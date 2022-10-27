'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnShowModalWindow = document.querySelector('.show-modal-window');

btnShowModalWindow.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const addHiddenClass = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModalWindow.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

// Добавляем закрытие поп-ап по кнопке 'Escape'
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    addHiddenClass();
  }
});
