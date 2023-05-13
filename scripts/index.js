import {
    popupAdd,
    popupEdit,
    popupZoom,
    popupFormAdding,
    cardsContainer,
    buttonZoom,
    buttonEdit,
    buttonAdd,
    nameElement,
    jobElement,
    nameInput,
    jobInput
} from './elements.js';
import {
    cards,
    validationConfig
} from './constants.js';
import Card from './Сard.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

// создание карточки

const cardsList = new Section(
    {
        items: cards,
        renderer: (item) => {
            cardsList.addItem(createCard(item));
        },
    },
    cardsContainer
);

function createCard(item) {
    const card = new Card(item, '.elements__template', handleCardClick);
    const cardElement = card.renderCard();
    return cardElement
};

cardsList.renderItems();

// попапы

const userPopupAdd = new Popup('.popup_mode_add');
const userPopupEdit = new Popup('.popup_mode_edit');
const userPopupZoom = new Popup('.popup_mode_loupe');

userPopupAdd.setEventListeners();
userPopupEdit.setEventListeners();
userPopupZoom.setEventListeners();

const popupImage = new PopupWithImage('.popup_mode_loupe')

function handleCardClick(item) {
    popupImage.openPopupWithImage(item);
};

const userProfile = new UserInfo(nameElement, jobElement);

buttonEdit.addEventListener('click', () => {
    const data = userProfile.getUserInfo();
    nameInput.value = data.name;
    jobInput.value = data.job;
    userPopupEdit.openPopup();
});

buttonAdd.addEventListener('click', () => {
    userPopupAdd.openPopup();
    validationFormAdding.toggleButton();
});

// формы

const popupEditForm = new PopupWithForm('.popup_mode_edit', handleSubmitFormEdit)
const popupAddForm = new PopupWithForm('.popup_mode_add',  handleSubmitFormAdd)

function handleSubmitFormEdit(inputValues) {
    const data = {  
        name: inputValues.name, 
        job:  inputValues.profession
     };
    userProfile.setUserInfo(data);
    userPopupEdit.closePopup();
};

function handleSubmitFormAdd(inputValues) {
    const data = {  
        title: inputValues.title, 
        link:  inputValues.link
     };
    cardsList.addItem(createCard(data));
    userPopupAdd.closePopup();
    popupFormAdding.reset();
};

popupEditForm.setEventListeners();
popupAddForm.setEventListeners();

// валидация

const validationFormAdding = new FormValidator(validationConfig, popupAdd);
const validationFormEditing = new FormValidator(validationConfig, popupEdit);

validationFormAdding.enableValidation();
validationFormEditing.enableValidation();