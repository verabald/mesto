const cards = [
    {
        title: 'Карачаевск',
        link: './images/elements-karachaevsk.jpg',
    },

    {
        title: 'Озеро Гижгит',
        link: './images/elements-gizgit.jpg',
    },

    {
        title: 'Гора Домбай',
        link: './images/elements-dombay.jpg',
    },

    {
        title: 'Ущелье Адыл-су',
        link: './images/elements-adil_su.jpg',
    },

    {
        title: 'Урочище Джилы-Су',
        link: './images/elements-jili_su.jpg',
    },

    {
        title: 'Карачаево-Черкесия',
        link: './images/elements-karachaevo.jpg',
    }
];

const cardTemplate = document.querySelector('.elements__template').content;
const cardsList = document.querySelector('.elements__list');

cards.forEach(createCard);

function createCard (item) {
    const cardElement = cardTemplate.cloneNode(true);
	cardElement.querySelector('.elements__caption').textContent = item.title;
    cardElement.querySelector('.elements__image').src = item.link;

	cardsList.append(cardElement);
};

const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonClose = popup.querySelector('.popup__button-close');
const popupForm = popup.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_field_name');
const jobInput = popupForm.querySelector('.popup__input_field_job');
const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__profession');
const titleInput = popupForm.querySelector('.popup__input_field_title');
const linkInput = popupForm.querySelector('.popup__input_field_link');

const openPopupEdit = function () {
    popup.classList.add ('popup_opened');
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
};

buttonEdit.addEventListener('click', openPopupEdit);

const openPopupAdd = function () {
    popup.nextElementSibling.classList.add ('popup_opened');
};

buttonAdd.addEventListener('click', openPopupAdd);

const closePopup = function () {
    popup.classList.remove ('popup_opened');
};

buttonClose.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;

    closePopup();
};

popupForm.addEventListener('submit', handleFormSubmit); 