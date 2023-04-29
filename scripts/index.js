import {
    cardsContainer,
    popupZoom,
    captionPopup,
    imagePopup,
    popupEdit,
    popupAdd,
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

cards.reverse().forEach((item) => {
    createCard(item);
  });

function createCard(item) {
    const card = new Card(item, '.elements__template', openImage);
    const cardElement = card.renderCard();
    cardsContainer.prepend(cardElement);
}

const validationFormAdding = new FormValidator(validationConfig, popupFormAdding);
const validationFormEditing = new FormValidator(validationConfig, popupFormEditing);

validationFormAdding.enableValidation();
validationFormEditing.enableValidation();

function openPopup(popup) {
    popup.classList.add ('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
};

buttonEdit.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
});

buttonAdd.addEventListener('click', () => {
    openPopup(popupAdd);
    validationFormAdding.setEventListeners();
    popupFormAdding.reset();
});

function openImage(item) {
    imagePopup.src = item.link;
    captionPopup.textContent = item.title;
    imagePopup.alt = item.title;
    openPopup(popupZoom);
};

function closePopup(popup) {
    popup.classList.remove ('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
};

function closePopupByOverlay(evt) { 
    if (evt.target !== evt.currentTarget) { 
        return; 
    } 
    closePopup(evt.target); 
};

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
};

document.querySelectorAll('.popup__button-close').forEach(button => {
    const buttonsPopup = button.closest('.popup'); 
    button.addEventListener('click', () => closePopup(buttonsPopup));
    buttonsPopup.addEventListener('mousedown', closePopupByOverlay); 
  }); 

function saveFormEdit(evt) {
    evt.preventDefault(); 

    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;

    closePopup(popupEdit);
};

popupFormEditing.addEventListener('submit', saveFormEdit);

function saveFormCard(evt) {
    evt.preventDefault();

    createCard( {title: titleInput.value, link: linkInput.value} );

    closePopup(popupAdd);
};

popupFormAdding.addEventListener('submit', saveFormCard);