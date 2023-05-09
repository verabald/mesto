import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitFormAdd) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleSubmitFormAdd = handleSubmitFormAdd;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    };

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.title] = input.value;
        });
        return this._inputValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitFormAdd(this._getInputValues());
        });
    };

    closePopup() {
        super.closePopup();
        this._form.reset();
    };
};