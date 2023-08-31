import "./MoviesCard.css";

const MoviesCard = ({ movie, isMoviesSavedPage, onClick, isSaved }) => {
  const { duration, trailerLink, image, nameRU } = movie;
  const movieImage = isMoviesSavedPage
    ? image
    : `https://api.nomoreparties.co/${image.url}`;

  function convertToHoursAndMinutes(number) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}ч ${minutes}м`;
  }

  const handleClick = () => {
    onClick(movie);
  };

  const result = convertToHoursAndMinutes(duration);

  return (
    <article className="movies-card">
      <a
        className="movies-card__link"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies-card__img" src={movieImage} alt={nameRU} />
      </a>

      <div
        className={`movies-card__desc ${
          isMoviesSavedPage ? "movies-card__desc_type_saved-movies" : ""
        }`}
      >
        <h2 className="movies-card__title">{nameRU}</h2>
        {isMoviesSavedPage ? (
          <button
            className="movies-card__delete-btn button-hover"
            type="button"
            aria-label="Сохранить"
            onClick={handleClick}
          />
        ) : (
          <button
            className={`movies-card__save-btn ${
              isSaved ? "movies-card__save-btn_active" : ""
            } button-hover`}
            type="button"
            aria-label="Сохранить"
            onClick={handleClick}
          />
        )}
      </div>
      <p className="movies-card__duration">{result}</p>
    </article>
  );
};

export default MoviesCard;
