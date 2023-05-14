import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._caption = this._popup.querySelector('.popup__caption');
        this._image = this._popup.querySelector('.popup__image');
    };

    openPopupWithImage(item) {
        this._image.src = item.link;
        this._image.alt = item.title;
        this._caption.textContent = item.title;
        super.openPopup();
    };
};