import { mainApiSettings } from "./apiSettings";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._handleResponse);
  }

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._handleResponse);
  }

  getUserInfo() {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
    }).then(this._handleResponse);
  }

  updateUserInfo({ name, email }) {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._handleResponse);
  }

  getSavedMovies() {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }

  saveMovie(movie) {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
    }).then(this._handleResponse);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi(mainApiSettings);
export default mainApi;
