export default class Section {
    constructor({renderer}, cardsContainer) {
        this._renderer = renderer;
        this._container = cardsContainer;
    };

    renderItems(items, user) {
        items.reverse().forEach((item) => {
            this._renderer(item, user);
        });
    };

    addItem(element) {
        this._container.prepend(element);
    };
};