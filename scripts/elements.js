const cardsContainer = document.querySelector('.elements__list');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonZoom = document.querySelector('.elements__image');

const captionPopup = document.querySelector('.popup__caption');
const imagePopup = document.querySelector('.popup__image');

const popupFormEditing = document.querySelector('.popup__form');

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__profession');
const nameInput = popupFormEditing.querySelector('.popup__input_field_name');
const jobInput = popupFormEditing.querySelector('.popup__input_field_job');

const popupFormAdding = document.querySelector('.popup__form');

const titleInput = popupFormAdding.querySelector('.popup__input_field_title');
const linkInput = popupFormAdding.querySelector('.popup__input_field_link');

export {
    cardsContainer,
    buttonZoom,
    captionPopup,
    imagePopup,
    buttonEdit,
    buttonAdd,
    popupFormEditing,
    nameElement,
    jobElement,
    nameInput,
    jobInput,
    popupFormAdding,
    titleInput,
    linkInput
};