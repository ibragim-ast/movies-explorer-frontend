const mainApiSettings = {
  baseUrl: "https://api.movies-ast.nomoreparties.co",
  //baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

const moviesApiSettings = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
};

export { mainApiSettings, moviesApiSettings };
