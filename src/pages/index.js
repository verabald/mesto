import {
    popupAdd,
    popupEdit,
    cardsContainer,
    buttonEdit,
    buttonAdd,
    nameElement,
    jobElement
} from '../assets/elements.js';
import {
    cards,
    validationConfig
} from '../assets/constants.js';
import './index.css';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

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

const popupEditForm = new PopupWithForm('.popup_mode_edit', handleSubmitFormEdit);
const popupAddForm = new PopupWithForm('.popup_mode_add',  handleSubmitFormAdd);
const popupImage = new PopupWithImage('.popup_mode_loupe');

const userProfile = new UserInfo(nameElement, jobElement);

function handleCardClick(item) {
    popupImage.openPopup(item);
};

buttonEdit.addEventListener('click', () => {
    popupEditForm.openPopup();
    popupEditForm.setInputValues(userProfile.getUserInfo());
});

buttonAdd.addEventListener('click', () => {
    popupAddForm.openPopup();
    formValidators['add-card'].resetValidation();
});

function handleSubmitFormEdit(inputValues) {
    const data = {  
        name: inputValues.name, 
        job:  inputValues.profession
     };
    userProfile.setUserInfo(data);
    popupEditForm.closePopup();
};

function handleSubmitFormAdd(inputValues) {
    const data = {  
        title: inputValues.title, 
        link:  inputValues.link
     };
    cardsList.addItem(createCard(data));
    popupAddForm.closePopup();
};

popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupImage.setEventListeners();

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);