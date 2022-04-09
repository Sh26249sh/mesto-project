//объявление переменных
const openPopupProfBtn=document.querySelector('.profile__edit-button');//кнопка вызова окна редактирования
const popupProfile=document.querySelector('.popup__profile');// окно редактирования профиля
const closeProfilePopupButton=document.querySelector('.popup__close'); //крестик закрытия окна ред профиля
const nameInput=document.querySelector('.popup__info-name');//в профиле
const nameProfile=document.querySelector('.profile__info-name');//в профиле
const jobInput=document.querySelector('.popup__info-profession');
const jobProfile=document.querySelector('.profile__info-profession');//в попап
const formProfile=document.querySelector('.popup__box-profile') //форма
const popupNewPlace=document.querySelector('.popup_new-place'); 
const titleInput=document.querySelector('.popup__input-title'); //наименование нового места в попап
const linkInput=document.querySelector('.popup__input-link'); // ссылка в попап
const openPopupButtonEdd=document.querySelector('.profile__add-button');//кнопка вызова окна редактирования
const closeNewPlacePopupButton=document.querySelector('.popup__close_new-place'); //крестик закрытия окна добавления карточки
const closeBtnPopupImg=document.querySelector('.popup__close_img');//кнопка закрытия попапа с картинкой 
const popupImage=document.querySelector('.popup_image');
const formPopupCard=document.querySelector('.popup__box-card');

const popupImg=document.querySelector('.popup__img');//попап с картинкой
const popupFigcaption=document.querySelector('.popup__figcaption');

const elements= document.querySelector('.elements'); //секция с карточками


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
            

function openPopup(popup){ //ф-ия открытия попап
  popup.classList.add('popup_opened'); //открываем попал добавляя класс
}

openPopupProfBtn.addEventListener('click', function(){ //событие-открываем окно ред проф клиая по кнопке
  openPopup(popupProfile);
  nameInput.value=nameProfile.textContent;
  jobInput.value=jobProfile.textContent;
}); 

function closePopup(popup){ //ф-ия закрытия попап
  popup.classList.remove('popup_opened');
}

closeProfilePopupButton.addEventListener('click', function(){ //событие-закрываем окно ред проф клиая по крестику
  closePopup(popupProfile)
}); 

function handleProfileFormSubmit (evt) { // ф-ия сохраняем данные в форме редактирования профиля и закрываем его 
  evt.preventDefault();
  nameProfile.textContent=nameInput.value;
  jobProfile.textContent=jobInput.value;
  closePopup(popupProfile); 
}
formProfile.addEventListener('submit', handleProfileFormSubmit); 

openPopupButtonEdd.addEventListener('click', function(){ //событие-открываем попап добавления нов карточки
  openPopup(popupNewPlace);
}); 

closeNewPlacePopupButton.addEventListener('click', function(){ //событие-закрываем окно нов карточка кликая по крестику
  closePopup(popupNewPlace);
}); 

closeBtnPopupImg.addEventListener('click',function () { //событие- закрытие попапа с картинкой на крестик нажимая
  closePopup(popupImage);
});

function handleCargFormSubmit (evt) { // ф-ия сохраняем данные в форме редактирования профиля и закрываем его 
  evt.preventDefault();
  nameProfile.textContent=nameInput.value;
  jobProfile.textContent=jobInput.value;
  closePopup(popupProfile); 
}

function createCard(item) {
  const templateElement=document.querySelector('.template-element').content;
  const cardElem=templateElement.cloneNode(true);// клонируем содержимое темплэй
  const cardImg=cardElem.querySelector('.element__image');
  const cardTitle=cardElem.querySelector('.element__title');
  cardImg.src = item.link;
  cardImg.alt= item.name;
  cardTitle.textContent=item.name;

  const deleteCardBtn=cardElem.querySelector('.element__trash');
  deleteCardBtn.addEventListener('click',(event)=>{
    event.target.closest('.element').remove();
  });
  
  const likeBtn=cardElem.querySelector('.element__like');
  likeBtn.addEventListener('click', (evt)=>{
    evt.target.classList.toggle('element__like_active')
  });
 
  cardImg.addEventListener('click',(evt)=>{//открытие картинки крупнее
    openPopup(popupImage);
    popupImg.src=item.link;
    popupImg.alt=item.name;
    popupFigcaption.textContent=item.name;
  })
  return cardElem;
}

const renderCard=(item)=> {
  const cardElem = createCard(item)
  elements.prepend(cardElem);
}

initialCards.forEach(renderCard); //необходимо в стилях изменить размеры катинок

formPopupCard.addEventListener('submit', (evt)=>{// создание новой карточки 
  evt.preventDefault();
  const titleInput=evt.target.querySelector('.popup__input-title'); //наименование нового места в попап
  const linkInput=evt.target.querySelector('.popup__input-link'); // ссылка в попап
  const item={name:titleInput.value,link:linkInput.value}
  renderCard(item);
  titleInput.value='';
  linkInput.value= '';
  //form.reset();
  closePopup(popupNewPlace);
})