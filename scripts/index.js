const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = popup.querySelector('.popup__button-close');
const buttonSave = popup.querySelector('.popup__button-submit');

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
buttonSave.addEventListener('click', closePopup);

const popupElement = popup.querySelector('.popup__container');
const nameInput = popupElement.querySelector('.popup__input-name');
const jobInput = popupElement.querySelector('.popup__input-job');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    nameInput.getAttribute ('value');
    jobInput.getAttribute ('value');

    const nameElement = document.querySelector('.profile__name');
    const jobElement = document.querySelector('.profile__profession');

    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
};

popupElement.addEventListener('submit', handleFormSubmit); 