class Api {
    constructor(setting) {
        this.address = setting.baseUrl;
    }

    _checkErrors(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }

    getUserinfo() {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        .then(res => this._checkErrors(res))
    }

    getMoviesList() {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._address}/movies`, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        })
        .then(res => this._checkErrors(res));
    }

    setUserInfo(data) {
        const token = localStorage.getItem('jwt');
    
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: data.name,
              about: data.about,
            })
          })
            .then((res) => this._checkErrors(res))
}
}

export const api = new Api ({
    baseUrl: 'https://api.movies-ast.nomoreparties.co'
})