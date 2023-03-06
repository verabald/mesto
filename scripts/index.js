const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = popup.querySelector('.popup__button-close');

const openPopup = function () {
    popup.classList.add ('popup_opened');
};

const closePopup = function () {
    popup.classList.remove ('popup_opened');
};

const closePopupByOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
};

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
popup.addEventListener('click', closePopupByOverlay);