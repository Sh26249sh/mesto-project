


import {nameProfile,jobProfile,nameInput,jobInput,popupProfile,esc} from '../index.js';

export function openPopup(popup){ //ф-ия открытия попап
  popup.classList.add('popup_opened'); //открываем попал добавляя класс
  document.addEventListener('keydown', handleEscape)
};

export function closePopup(popup){ //ф-ия закрытия попап
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',  handleEscape)
};
export function handleProfileFormSubmit (evt) { // ф-ия сохраняем данные в форме редактирования профиля и закрываем его 
  evt.preventDefault();
  nameProfile.textContent=nameInput.value;
  jobProfile.textContent=jobInput.value;
  closePopup(popupProfile); 
};
export function handleEscape(evt) {
  if (evt.key === esc) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
};