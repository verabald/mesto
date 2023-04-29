export default class FormValidator {
    constructor(validationConfig, form) {
        this._validationConfig = validationConfig;
        this._form = form;
        this._inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
        this._submitButtonSelector = this._form.querySelector(validationConfig.submitButtonSelector);
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
    };

    enableValidation() {
        this.setEventListeners();
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

    setEventListeners() {
        this._disableButton();
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                if (this._hasInvalidInput(this._inputList)) {
                    this._disableButton();
                } else {
                    this._enableButton();
                }
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