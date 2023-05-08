import {
    cardsContainer,
    captionPopup,
    imagePopup,
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
    const card = new Card(item, '.elements__template', openImage);
    const cardElement = card.renderCard();
    return cardElement
}

cardsList.renderItems();

const popupAdd = new Popup('.popup_mode_add');
const popupEdit = new Popup('.popup_mode_edit');
const popupZoom = new Popup('.popup_mode_loupe');

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupZoom.setEventListeners();

const validationFormAdding = new FormValidator(validationConfig, popupFormAdding);
const validationFormEditing = new FormValidator(validationConfig, popupFormEditing);

validationFormAdding.enableValidation();
validationFormEditing.enableValidation();

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

function openImage(item) {
    imagePopup.src = item.link;
    captionPopup.textContent = item.title;
    imagePopup.alt = item.title;
    popupZoom.openPopup();
};

function saveFormEdit(evt) {
    evt.preventDefault(); 

    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;

    popupEdit.closePopup();
};

popupFormEditing.addEventListener('submit', saveFormEdit);

function saveFormCard(evt) {
    evt.preventDefault();

    createCard( {title: titleInput.value, link: linkInput.value} );

    popupAdd.closePopup();
};

popupFormAdding.addEventListener('submit', saveFormCard);
