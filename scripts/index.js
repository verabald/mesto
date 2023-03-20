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

const popupEdit = document.querySelector('.popup_mode_edit');
const popupAdd = document.querySelector('.popup_mode_add');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const buttonCloseEditing = popupEdit.querySelector('.popup__button-close');
const buttonCloseAdding = popupAdd.querySelector('.popup__button-close');

function openPopup (popup) {
    popup.classList.add ('popup_opened');

    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
};

buttonEdit.addEventListener('click', () => openPopup(popupEdit));
buttonAdd.addEventListener('click', () => openPopup(popupAdd));

function closePopup (popup) {
    popup.classList.remove ('popup_opened');
};

buttonCloseEditing.addEventListener('click', () => closePopup(popupEdit));
buttonCloseAdding.addEventListener('click', () => closePopup(popupAdd));

const popupFormEditing = popupEdit.querySelector('.popup__form');

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__profession');
const nameInput = popupFormEditing.querySelector('.popup__input_field_name');
const jobInput = popupFormEditing.querySelector('.popup__input_field_job');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;

    closePopup(popupEdit);
};

popupFormEditing.addEventListener('submit', handleFormSubmit); 

const titleInput = popupFormAdding.querySelector('.popup__input_field_title');
const linkInput = popupFormAdding.querySelector('.popup__input_field_link');