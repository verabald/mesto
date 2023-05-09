import {
    cardsContainer,
    buttonEdit,
    buttonAdd,
    buttonZoom,
    popupFormEditing,
    nameElement,
    jobElement,
    nameInput,
    jobInput,
    popupFormAdding,
    titleInput,
    linkInput
} from './elements.js';
import {
    cards,
    validationConfig
} from './constants.js';
import Card from './card.js';
import FormValidator from './formvalidator.js';
import Section from './section.js';
import Popup from './popup.js';
import PopupWithImage from './popupwithimage.js';
import PopupWithForm from './popupwithform.js';
import UserInfo from './userinfo.js';

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

const popupAdd = new Popup('.popup_mode_add');
const popupEdit = new Popup('.popup_mode_edit');
const popupZoom = new Popup('.popup_mode_loupe');

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupZoom.setEventListeners();

const popupImage = new PopupWithImage('.popup_mode_loupe')

function handleCardClick(item) {
    popupImage.openPopupWithImage(item);
};

buttonEdit.addEventListener('click', () => {
    popupEdit.openPopup();
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
});

buttonAdd.addEventListener('click', () => {
    popupAdd.openPopup();
    popupFormAdding.reset();
    validationFormAdding.toggleButton();
});

// формы

const popupEditForm = new PopupWithForm('.popup_mode_edit', handleSubmitFormEdit)
const popupAddForm = new PopupWithForm('.popup_mode_add',  handleSubmitFormAdd)

function handleSubmitFormAdd(data) {
 
};

function handleSubmitFormEdit() {
    
};

popupEditForm.setEventListeners();
popupAddForm.setEventListeners();

// валидация

const validationFormAdding = new FormValidator(validationConfig, popupFormAdding);
const validationFormEditing = new FormValidator(validationConfig, popupFormEditing);

validationFormAdding.enableValidation();
validationFormEditing.enableValidation();