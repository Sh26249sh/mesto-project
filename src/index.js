
import './pages/index.css';
import { openPopup, closePopup, handleProfileFormSubmit } from './components/modal.js';
import { createCard } from './components/card.js';
import { toggleButtonState, enableFormValidation } from './components/validate.js';

//объявление переменных
const openPopupProfBtn = document.querySelector('.profile__edit-button');//кнопка вызова окна редактирования
export const popupProfile = document.querySelector('.popup__profile');// окно редактирования профиля
const closeProfilePopupButton = document.querySelector('.popup__close'); //крестик закрытия окна ред профиля
export const nameInput = document.querySelector('.popup__info-name');//в профиле
export const nameProfile = document.querySelector('.profile__info-name');//в профиле
export const jobInput = document.querySelector('.popup__info-profession');
export const jobProfile = document.querySelector('.profile__info-profession');//в попап
const formProfile = document.querySelector('.popup__box-profile') //форма
const popupNewPlace = document.querySelector('.popup_new-place');
const titleInput = document.querySelector('.popup__input-title'); //наименование нового места в попап
const linkInput = document.querySelector('.popup__input-link'); // ссылка в попап
const openPopupButtonEdd = document.querySelector('.profile__add-button');//кнопка вызова окна редактирования
const closeNewPlacePopupButton = document.querySelector('.popup__close_new-place'); //крестик закрытия окна добавления карточки
const closeBtnPopupImg = document.querySelector('.popup__close_img');//кнопка закрытия попапа с картинкой 
export const popupImage = document.querySelector('.popup_image');
const formPopupCard = document.querySelector('.popup__box-card');
export const popupImg = document.querySelector('.popup__img');//попап с картинкой
export const popupFigcaption = document.querySelector('.popup__figcaption');
const elements = document.querySelector('.elements'); //секция с карточками
const popups = Array.from(document.querySelectorAll('.popup'));// все попапы(с классом попап)
const popupBtnSbmt = document.querySelector('.popup__button_reset');
export const esc = 'Escape';
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: '.popup__button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__input_error_visible'
}


openPopupProfBtn.addEventListener('click', function () { //событие-открываем окно ред проф клиая по кнопке
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeProfilePopupButton.addEventListener('click', function () { //событие-закрываем окно ред проф клиая по крестику
  closePopup(popupProfile)
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

openPopupButtonEdd.addEventListener('click', function () { //событие-открываем попап добавления нов карточки
  openPopup(popupNewPlace);
});

closeNewPlacePopupButton.addEventListener('click', function () { //событие-закрываем окно нов карточка кликая по крестику
  closePopup(popupNewPlace);
});

closeBtnPopupImg.addEventListener('click', function () { //событие- закрытие попапа с картинкой на крестик нажимая
  closePopup(popupImage);
});



const renderCard = (item) => {
  const cardElem = createCard(item)
  elements.prepend(cardElem);
}

initialCards.forEach(renderCard); //необходимо в стилях изменить размеры катинок

formPopupCard.addEventListener('submit', (evt) => {// создание новой карточки 
  evt.preventDefault();
  const titleInput = evt.target.querySelector('.popup__input-title'); //наименование нового места в попап
  const linkInput = evt.target.querySelector('.popup__input-link'); // ссылка в попап
  const item = { name: titleInput.value, link: linkInput.value }
  renderCard(item);
  //titleInput.value = '';
  //linkInput.value = '';
  formPopupCard.reset();
  closePopup(popupNewPlace);
  popupBtnSbmt .classList.add('popup__button_disabled');
  popupBtnSbmt .setAttribute('disabled', true)
})

popups.forEach(function (popup) {    //закрытие кликом на оверлей
  popup.addEventListener("mousedown", function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  })
})



enableFormValidation(validationObject);