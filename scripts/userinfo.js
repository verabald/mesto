export default class UserInfo {
    constructor( {nameSelector, jobSelector} ) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    };

    getUserInfo() {
        const infoData = {
            name: this._name.textContent,
            job: this._job.textContent
        };
        return infoData;
    };

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.job;
    };
};