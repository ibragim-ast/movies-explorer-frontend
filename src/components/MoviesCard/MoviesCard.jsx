import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {
  const { duration, trailerLink, image, nameRU } = movie;
  const movieImage = `https://api.nomoreparties.co/${image.url}`;
  const location = useLocation();

  const isMoviesSavedPage = location.pathname === "/saved-movies";

  function convertToHoursAndMinutes(number) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}ч ${minutes}м`;
  }

  const handleClick = (evt) => {
    evt.target.classList.toggle("movies-card__save-btn_active");
  };

  const result = convertToHoursAndMinutes(duration);

  return (
    <article className="movies-card">
      <a
        href={trailerLink}
        className="movies-card__link"
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies-card__img" src={movieImage} alt={nameRU} />
      </a>

      <div className="movies-card__desc">
        <h2 className="movies-card__title">{nameRU}</h2>
        {isMoviesSavedPage ? (
          <button
            className="movies-card__delete-btn button-hover"
            type="button"
            aria-label="Сохранить"
          />
        ) : (
          <button
            className="movies-card__save-btn button-hover"
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
