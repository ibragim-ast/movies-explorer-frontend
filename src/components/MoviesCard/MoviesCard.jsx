import { useState } from "react";
import { useLocation } from "react-router-dom";
import Icons from "../Icons";
import "./MoviesCard.css";

const MoviesCard = ({ movieId, duration, image, name }) => {
  const location = useLocation();

  const isMoviesSavedPage = location.pathname === "/saved-movies";
  const [savedMovies, setSavedMuvies] = useState([]);

  const isSaved = savedMovies.some((movie) => movie.movieId === movieId);

  const handleMoviesSave = () => {
    if (isSaved) {
      const updateMovies = savedMovies.filter(
        (movie) => movie.movieId !== movieId
      );
      setSavedMuvies(updateMovies);
    } else {
      const newMovie = {
        movieId,
        duration,
        image,
        name,
      };
      setSavedMuvies([...savedMovies, newMovie]);
    }
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
        <div>
          <div className="movies-card__title-actions">
            <p className="movies-card__text">{name}</p>
            <button
              className="movies-card__save-btn"
              onClick={handleMoviesSave}
            >
              {isMoviesSavedPage ? (
                <Icons.Delete />
              ) : isSaved ? (
                <Icons.Save />
              ) : (
                <Icons.UnSave />
              )}
            </button>
          </div>
          <span className="movies-card__duration">{result}</span>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
