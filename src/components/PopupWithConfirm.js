import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._buttonSubmit = this._popup.querySelector('.popup__button-submit');
        this._buttonText = this._buttonSubmit.textContent;
    };

    openPopup(card, id) {
        super.openPopup();
        this.id = id;
        this.card = card;
    };

    showLoader(loader) {
        if (!this._buttonSubmit) return;
        if (loader) {
            this._buttonSubmit.textContent = 'Удаление...';
        } else {
            this._buttonSubmit.textContent = this._buttonText;
        };
    };

    setEventListeners() {
        super.setEventListeners();
        this._buttonSubmit.addEventListener('click', () => {
            this._handleSubmit(this.id, this.card);
        });
    };
};