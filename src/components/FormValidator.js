export default class FormValidator {
    constructor(validationConfig, form) {
        this._validationConfig = validationConfig;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(validationConfig.inputSelector));
        this._submitButtonSelector = this._form.querySelector(validationConfig.submitButtonSelector);
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
    };

    enableValidation() {
        this._setEventListeners();
    };

    _checkInputValidity(input) {
     const spanError = document.querySelector(`#${input.id}-error`);
        if (input.checkValidity()) {
                spanError.textContent = '';
                input.classList.remove(this._inputErrorClass);
        } else {
                spanError.textContent = input.validationMessage;
                input.classList.add(this._inputErrorClass);
        }
    };

    toggleButton() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    };

    _setEventListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this.toggleButton();
            });
        });
    };

    _hasInvalidInput() {
        return this._inputList.some(item => item.validationMessage)
    };
    
    _disableButton() {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.setAttribute('disabled', true)
    };

    _enableButton() {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
        this._submitButtonSelector.removeAttribute('disabled', true)
    };
};