import { moviesApiSettings } from "./apiSettings";

class MoviesApi {
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

  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi(moviesApiSettings);
export default moviesApi;
