const cardTemplate = document.querySelector('.elements__template').content;
const cardsContainer = document.querySelector('.elements__list');

const popupZoom = document.querySelector('.popup_mode_loupe');
const buttonZoom = document.querySelector('.elements__image');

const captionPopup = document.querySelector('.popup__caption');
const imagePopup = document.querySelector('.popup__image');

function createCard (item) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.elements__image').src = item.link;
	cardElement.querySelector('.elements__caption').textContent = item.title;
    cardElement.querySelector('.elements__image').alt = item.title;

    cardElement.querySelector('.elements__image').addEventListener('click', function (evt) {
        imagePopup.src = item.link;
        captionPopup.textContent = item.title;
        imagePopup.alt = item.title;
        openPopup (popupZoom);
  });
  
    cardElement.querySelector('.elements__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like-button_active');
  });

    cardElement.querySelector('.elements__delete-button').addEventListener('click', function (evt) {
        const card = evt.target.closest('.elements__card');
	    card.remove();
});
    return cardElement;
};

cards.reverse().forEach(renderCard);

function renderCard (item) {
    cardsContainer.prepend(createCard(item));
};

const popupEdit = document.querySelector('.popup_mode_edit');
const popupAdd = document.querySelector('.popup_mode_add');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

function openPopup (popup) {
    popup.classList.add ('popup_opened');
};

buttonEdit.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
});
buttonAdd.addEventListener('click', () => {
    openPopup(popupAdd);
    titleInput.value = '';
    linkInput.value = '';
});

function closePopup (popup) {
    popup.classList.remove ('popup_opened');
};

document.querySelectorAll('.popup__button-close').forEach(button => {
    const buttonsPopup = button.closest('.popup'); 
    button.addEventListener('click', () => closePopup(buttonsPopup));
  }); 

const popupFormEditing = popupEdit.querySelector('.popup__form');

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__profession');
const nameInput = popupFormEditing.querySelector('.popup__input_field_name');
const jobInput = popupFormEditing.querySelector('.popup__input_field_job');

function saveFormEdit (evt) {
    evt.preventDefault(); 

    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;

    closePopup(popupEdit);
};

popupFormEditing.addEventListener('submit', saveFormEdit);

const popupFormAdding = popupAdd.querySelector('.popup__form');

const titleInput = popupFormAdding.querySelector('.popup__input_field_title');
const linkInput = popupFormAdding.querySelector('.popup__input_field_link');

function saveFormCard (evt) {
    evt.preventDefault(); 

    renderCard({title: titleInput.value, link: linkInput.value});

    closePopup(popupAdd);
};

popupFormAdding.addEventListener('submit', saveFormCard); 