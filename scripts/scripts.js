const seachButton = document.querySelector('.button-seach');
const closeButton = document.querySelector('.modal-close');
const modalWindow = document.querySelector('.modal');

const showModalHandler = (evt) => {
  evt.preventDefault();
  modalWindow.classList.remove('visually-hidden');
}

const closeModalHandler = (evt) => {
  evt.preventDefault();
  modalWindow.classList.add('visually-hidden');
}

seachButton.addEventListener('click', (evt) => showModalHandler(evt));
closeButton.addEventListener('click', (evt) => closeModalHandler(evt));
