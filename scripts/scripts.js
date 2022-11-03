const seachButton = document.querySelector('.button-seach');
const closeButton = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');
const wantHereButton = document.querySelector('#want-here-button');

const showModalHandler = (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove('visually-hidden');
}

const closeModalHandler = (evt) => {
  evt.preventDefault();
  modalContainer.classList.add('visually-hidden');
}


wantHereButton.addEventListener('click', (evt) => showModalHandler(evt));
seachButton.addEventListener('click', (evt) => showModalHandler(evt));
closeButton.addEventListener('click', (evt) => closeModalHandler(evt));
