const cardsContainer = document.querySelector('.elements__list');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEditAvatar = document.querySelector('.profile__avatar');

const profile = {
    nameElement: '.profile__name',
    jobElement: '.profile__profession',
    avatarElement:'.profile__image'
};

export {
    cardsContainer,
    buttonEdit,
    buttonAdd,
    buttonEditAvatar,
    profile
};