import {
    popupAdd,
    popupEdit,
    cardsContainer,
    buttonEdit,
    buttonAdd,
    nameElement,
    jobElement
} from '../assets/elements.js';
import {
    cards,
    validationConfig,
    apiOptions
} from '../assets/constants.js';
import './index.css';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api(apiOptions); 

Promise.all( [api.getInitialCards(), api.getUserInfoApi()] )
.then(( [card, user] ) => {
    const userId = user._id;
    cardsList.renderItems(card, userId);
})
.catch((err) => console.log(err))

const cardsList = new Section(
    {
        renderer: (item, id) => {
            cardsList.addItem(createCard(item, id));
        },
    },
    cardsContainer
);

const createCard = (item, id) => {
    const card = new Card({
        data: item, 
        id: id, 
        templateSelector: '.elements__template', 
        handleCardClick: (item) => {
            popupImage.openPopup(item);
        },
        handleCardLike: (id) => {
            api.likeCard(id)
            .then((res) => {
                card.showLikes(res);
            })
            .catch((err) => console.log(err))
        },
        handleCardDeleteLike: (id) => {
            api.deleteLike(id)
            .then((res) => {
                card.showLikes(res);
            })
            .catch((err) => console.log(err))
        }
    });

    return card.renderCard();
};



const popupEditForm = new PopupWithForm('.popup_mode_edit', handleSubmitFormEdit);
const popupAddForm = new PopupWithForm('.popup_mode_add',  handleSubmitFormAdd);
const popupImage = new PopupWithImage('.popup_mode_loupe');

const userProfile = new UserInfo(nameElement, jobElement);

buttonEdit.addEventListener('click', () => {
    popupEditForm.openPopup();
    popupEditForm.setInputValues(userProfile.getUserInfo());
});

buttonAdd.addEventListener('click', () => {
    popupAddForm.openPopup();
    formValidators['add-card'].resetValidation();
});

function handleSubmitFormEdit(inputValues) {
    const data = {  
        name: inputValues.name, 
        job:  inputValues.profession
     };
    userProfile.setUserInfo(data);
    popupEditForm.closePopup();
};

function handleSubmitFormAdd(inputValues) {
    const data = {  
        title: inputValues.title, 
        link:  inputValues.link
     };
    cardsList.addItem(createCard(data));
    popupAddForm.closePopup();
};

popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupImage.setEventListeners();

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);