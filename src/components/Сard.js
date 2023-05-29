export default class Card {
    constructor({data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike, handleCardDeleteLike}) {
        this._data = data; 
        this._name = this._data.name;
        this._link = this._data.link;
        this._cardId = this._data._id;
        this._ownCard = this._data.owner._id;
        this._userId = userId;

        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        this._handleCardDeleteLike = handleCardDeleteLike;

        this._element = this._getTemplate();
        
        this._image = this._element.querySelector('.elements__image');
        this._likeButton = this._element.querySelector('.elements__like-button');
        this._deleteButton = this._element.querySelector('.elements__delete-button');
        this._counter = this._element.querySelector('.elements__like-counter');
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
        this._image.src = this._link;
        this._element.querySelector('.elements__caption').textContent = this._name;
        this._image.alt = this._name;

        this.showLikes(this._data);
        this._checkButtonDelete();
        this._setEventListener();

        return this._element;
    };

    _checkButtonDelete() {
        if (this._ownCard !== this._userId) {
            this._deleteButton.remove();
        };
    };

    showLikes(card) {
        this._likes = card.likes;
        if (this._likes.length === 0) {
            this._counter.textContent = '';
        } else {
            this._counter.textContent = this._likes.length
        };

        if (this._checkLike()) {
            this._likeButton.classList.add('elements__like-button_active');
        } else {
            this._likeButton.classList.remove('elements__like-button_active');
        };
    };

    _checkLike() {
        return this._likes.some((like) => like._id === this._userId);
    };

    _toggleLike() {
        if (this._checkLike()) {
            this._handleCardDeleteLike(this._cardId);
        } else {
            this._handleCardLike(this._cardId);
        };
    };

    onDelete() {
        this._element.remove();
        this._element = null;
    };

    _setEventListener() {
        this._deleteButton.addEventListener('click', () => {
            this._handleCardDelete(this._cardId, this);
        });

        this._likeButton.addEventListener('click', () => {
            this._toggleLike();
        });
        
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._data);
        });
     };
};