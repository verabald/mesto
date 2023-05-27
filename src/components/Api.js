export default class Api {
    constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
      this._authorization = options.headers['authorization'];
    };

    _test(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    };
  
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
              authorization: this._authorization
            },
        })
        .then(res => this._test(res))
    };

    addCard(card) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link,
            }),
        })
        .then(res => this._test(res))
    };

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => this._test(res))
    };

    likeCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => this._test(res))
    };

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => this._test(res))
    };

    getUserInfoApi() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            },
        })
        .then(res => this._test(res))
    };

    setUserInfoApi(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        })
        .then(res => this._test(res))
    };

    setAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        })
        .then(res => this._test(res))
    };
  };