const cardsContainer = document.querySelector('.elements__list');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonZoom = document.querySelector('.elements__image');

const popupEdit = document.querySelector('.popup_mode_edit');
const popupAdd = document.querySelector('.popup_mode_add');
const popupZoom = document.querySelector('.popup_mode_loupe');
const popupFormAdding = popupAdd.querySelector('.popup__form');

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');

export {
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
};