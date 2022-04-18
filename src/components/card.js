

import { popupImage, popupFigcaption, popupImg } from '../index.js';
import { openPopup } from './modal.js';

export function createCard(item) {
  const templateElement = document.querySelector('.template-element').content;
  const cardElem = templateElement.cloneNode(true);// клонируем содержимое темплэй
  const cardImg = cardElem.querySelector('.element__image');
  const cardTitle = cardElem.querySelector('.element__title');
  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardTitle.textContent = item.name;

  const deleteCardBtn = cardElem.querySelector('.element__trash');
  deleteCardBtn.addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });

  const likeBtn = cardElem.querySelector('.element__like');
  likeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active')
  });

  cardImg.addEventListener('click', (evt) => {//открытие картинки крупнее
    openPopup(popupImage);
    popupImg.src = item.link;
    popupImg.alt = item.name;
    popupFigcaption.textContent = item.name;
  })
  return cardElem;
}