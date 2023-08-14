import { useState } from "react";
import "./MoviesCard.css";

export default function MoviesCard({ movieId, duration, image, name }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleMoviesSave = () => {
    setIsSaved(!isSaved);
  };

  function convertToHoursAndMinutes(number) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}ч ${minutes}м`;
  }

  const result = convertToHoursAndMinutes(duration);

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <img className="movies-card__img" src={image} alt={name} />
        <div movies-card__footer>
          <div className="movies-card__title-actions">
            <p className="movies-card__text">{name}</p>
            <button
              className={`movies-card__save-btn ${
                isSaved ? "movies-card__btn_save" : "movies-card__btn_not-save"
              }`}
              onClick={handleMoviesSave}
            ></button>
          </div>
          <span className="movies-card__duration">{result}</span>
        </div>
      </div>
    </li>
  );
}
