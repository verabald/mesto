const cards = [
    {
        title: 'Карачаевск',
        link: './images/elements-karachaevsk.jpg',
    },

    {
        title: 'Озеро Гижгит',
        link: './images/elements-gizgit.jpg'
    },

    {
        title: 'Гора Домбай',
        link: './images/elements-dombay.jpg'
    },

    {
        title: 'Ущелье Адыл-су',
        link: './images/elements-adil_su.jpg'
    },

    {
        title: 'Урочище Джилы-Су',
        link: './images/elements-jili_su.jpg'
    },

    {
        title: 'Карачаево-Черкесия',
        link: './images/elements-karachaevo.jpg'
    }
];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__input_type_error'
};

export {
    cards,
    validationConfig
};