const cards = [
    {
        title: 'Карачаевск',
        link: './images/elements-karachaevsk.jpg',
    },

    {
        title: 'Озеро Гижгит',
        link: './images/elements-gizgit.jpg'
    },

    {
        title: 'Гора Домбай',
        link: './images/elements-dombay.jpg'
    },

    {
        title: 'Ущелье Адыл-су',
        link: './images/elements-adil_su.jpg'
    },

    {
        title: 'Урочище Джилы-Су',
        link: './images/elements-jili_su.jpg'
    },

    {
        title: 'Карачаево-Черкесия',
        link: './images/elements-karachaevo.jpg'
    }
];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__input_type_error'
};

const cardsContainer = document.querySelector('.elements__list');

const popupZoom = document.querySelector('.popup_mode_loupe');
const popupEdit = document.querySelector('.popup_mode_edit');
const popupAdd = document.querySelector('.popup_mode_add');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonZoom = document.querySelector('.elements__image');

const captionPopup = document.querySelector('.popup__caption');
const imagePopup = document.querySelector('.popup__image');

const popupFormEditing = popupEdit.querySelector('.popup__form');

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__profession');
const nameInput = popupFormEditing.querySelector('.popup__input_field_name');
const jobInput = popupFormEditing.querySelector('.popup__input_field_job');

const popupFormAdding = popupAdd.querySelector('.popup__form');

const titleInput = popupFormAdding.querySelector('.popup__input_field_title');
const linkInput = popupFormAdding.querySelector('.popup__input_field_link');

export {
    cards,
    validationConfig,
    cardsContainer,
    popupZoom,
    buttonZoom,
    captionPopup,
    imagePopup,
    popupEdit,
    popupAdd,
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