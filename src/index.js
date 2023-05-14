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
} from './assets/elements.js';
import {
    cards,
    validationConfig
} from './assets/constants.js';
import './pages/index.css';
import Card from './components/Сard.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

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

const userPopupAdd = new Popup('.popup_mode_add');
const userPopupEdit = new Popup('.popup_mode_edit');
const userPopupZoom = new Popup('.popup_mode_loupe');

userPopupAdd.setEventListeners();
userPopupEdit.setEventListeners();
userPopupZoom.setEventListeners();

const popupImage = new PopupWithImage('.popup_mode_loupe');

function handleCardClick(item) {
    popupImage.openPopup(item);
};

const userProfile = new UserInfo(nameElement, jobElement);

buttonEdit.addEventListener('click', () => {
    userPopupEdit.openPopup();
    popupEditForm.setInputValues(userProfile.getUserInfo());
});

buttonAdd.addEventListener('click', () => {
    userPopupAdd.openPopup();
    validationFormAdding.toggleButton();
});

const popupEditForm = new PopupWithForm('.popup_mode_edit', handleSubmitFormEdit);
const popupAddForm = new PopupWithForm('.popup_mode_add',  handleSubmitFormAdd);

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

const validationFormAdding = new FormValidator(validationConfig, popupAdd);
const validationFormEditing = new FormValidator(validationConfig, popupEdit);

validationFormAdding.enableValidation();
validationFormEditing.enableValidation();