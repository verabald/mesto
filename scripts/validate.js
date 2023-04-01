const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__input_type_error'
};

function enableValidation({ formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(form => {
        setEventListeners(form, rest)
    });
};

function setEventListeners(form, { inputSelector, submitButtonSelector, ...rest }) {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const buttonForm = form.querySelector(submitButtonSelector);
    disableButton(buttonForm, rest);
    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkInputValidity(input, rest);
            if (hasInvalidInput(inputList)) {
                disableButton(buttonForm, rest);
            } else {
                enableButton(buttonForm, rest);
            }
        });
    });
};

function checkInputValidity(input, { inputErrorClass, ...rest }) {
    const spanError = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
        spanError.textContent = '';
        input.classList.remove(inputErrorClass);
    } else {
        spanError.textContent = input.validationMessage;
        input.classList.add(inputErrorClass);
    }
};

function hasInvalidInput(inputList) {
    return inputList.some(item => item.validationMessage)
};

function disableButton(button, { inactiveButtonClass }) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true)
};

function enableButton(button, { inactiveButtonClass }) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled', true)
};

enableValidation(validationConfig);