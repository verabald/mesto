export default class UserInfo {
    constructor( {nameElement, jobElement, avatarElement} ) {
        this._name = document.querySelector(nameElement);
        this._job = document.querySelector(jobElement);
        this._avatar = document.querySelector(avatarElement);
    };

    getUserInfo() {
        const infoData = {
            name: this._name.textContent,
            about: this._job.textContent
        };
        return infoData;
    };

    setUserInfo({name, about}) {
        this._name.textContent = name;
        this._job.textContent = about;
    };

    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    };
};