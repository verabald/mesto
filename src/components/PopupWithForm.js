import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleSubmit = handleSubmit;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    };

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    };

    setInputValues(data) {
        this._inputList.forEach((input, i) => {
            input.value = Object.values(data)[i];
        });
    };

    closePopup() {
        super.closePopup();
        this._form.reset();
    };
};