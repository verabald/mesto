const karachaevskImage = new URL('../images/elements-karachaevsk.jpg', import.meta.url);
const gizgitImage = new URL('../images/elements-gizgit.jpg', import.meta.url);
const dombayImage = new URL('../images/elements-dombay.jpg', import.meta.url);
const adilsuImage = new URL('../images/elements-adil_su.jpg', import.meta.url);
const jilisuImage = new URL('../images/elements-jili_su.jpg', import.meta.url);
const karachaevoImage = new URL('../images/elements-karachaevo.jpg', import.meta.url);

const cards = [
    {
        title: 'Карачаевск',
        link: karachaevskImage
    },

    {
        title: 'Озеро Гижгит',
        link: gizgitImage
    },

    {
        title: 'Гора Домбай',
        link: dombayImage
    },

    {
        title: 'Ущелье Адыл-су',
        link: adilsuImage
    },

    {
        title: 'Урочище Джилы-Су',
        link: jilisuImage
    },

    {
        title: 'Карачаево-Черкесия',
        link: karachaevoImage
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