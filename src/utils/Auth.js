class Auth {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getResponceData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка ${res.status}`)
        }
        return res.json();
    }

    register(userData) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: userData.email,
                password: userData.password
            }),
        }).then(this._getResponceData);
    }

    authorize(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        }).then(this._getResponceData)
    }

    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(this._getResponceData)
    }
}

const auth = new Auth({
    baseUrl: "https://api.movies-ast.nomoreparties.co/",
    //baseUrl: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    },
});

export default auth;