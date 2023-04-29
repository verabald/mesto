import { openImage } from "./index.js";

export default class Card {
    constructor(data, templateSelector) {
        this._data = data; 
        this._templateSelector = templateSelector;
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.elements__image');
        this._likeButton = this._element.querySelector('.elements__like-button');
        this._deleteButton = this._element.querySelector('.elements__delete-button');
    };

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.elements__card')
          .cloneNode(true);

          return cardElement;
    };

    renderCard() {
        this._setEventListener();
        this._image.src = this._data.link;
        this._element.querySelector('.elements__caption').textContent = this._data.title;
        this._image.alt = this._data.title;

        return this._element;
    };

    _onDelete = () => {
        this._element.remove();
    };
      
    _onLike = () => {
        this._likeButton.classList.toggle('elements__like-button_active');
    };

    _setEventListener() {
        this._deleteButton.addEventListener('click', () => {
            this._onDelete();
        });

        this._likeButton.addEventListener('click', () => {
            this._onLike();
        });
        
        this._image.addEventListener('click', () => {
            openImage(this._data);
        });
     };
}
