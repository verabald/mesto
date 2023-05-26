import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._buttonSubmit = this._popup.querySelector('.popup__button-submit');
    };

    openPopup(card, id) {
        super.openPopup();
        this.id = id;
        this.card = card;
    };
};