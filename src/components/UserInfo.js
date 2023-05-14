export default class UserInfo {
    constructor(nameElement, jobElement) {
        this._name = nameElement;
        this._job = jobElement;
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