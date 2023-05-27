const cardsContainer = document.querySelector('.elements__list');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEditAvatar = document.querySelector('.profile__avatar');

const popupEdit = document.querySelector('.popup_mode_edit');
const popupAdd = document.querySelector('.popup_mode_add');

const profile = {
    nameElement: '.profile__name',
    jobElement: '.profile__profession',
    avatarElement:'.profile__image'
};

export {
    popupAdd,
    popupEdit,
    cardsContainer,
    buttonEdit,
    buttonAdd,
    buttonEditAvatar,
    profile
};