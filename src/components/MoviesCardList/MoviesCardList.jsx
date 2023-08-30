import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import {
  MOVIES_PER_PAGE_LARGE,
  MOVIES_PER_PAGE_MIDDLE,
  MOVIES_PER_PAGE_SMALL,
} from "../../utils/constants";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies, messageText, onClick, savedMovies }) => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [initialCount, setInitialCount] = useState(Number);
  const [step, setStep] = useState(Number);
  const [currentPage, setCurrentPage] = useState(0);
  const { pathname } = useLocation();
  const isSavedMovies = pathname === "/saved-movies";

  const checkWindowWidth = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth >= 1280) {
      setInitialCount(MOVIES_PER_PAGE_LARGE.initial);
      setStep(MOVIES_PER_PAGE_LARGE.step);
    } else if (currentWidth >= 768) {
      setInitialCount(MOVIES_PER_PAGE_MIDDLE.initial);
      setStep(MOVIES_PER_PAGE_MIDDLE.step);
    } else {
      setInitialCount(MOVIES_PER_PAGE_SMALL.initial);
      setStep(MOVIES_PER_PAGE_SMALL.step);
    }
  };

  const showMoreItems = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (isSavedMovies) {
      setCurrentMovies(movies);
      return;
    }
    checkWindowWidth();
    setCurrentMovies(movies.slice(0, initialCount + currentPage * step));

    window.addEventListener("resize", () => {
      checkWindowWidth();
    });
  }, [initialCount, currentPage, movies, isSavedMovies, step]);

  useEffect(() => {
    setCurrentPage(0);
  }, [movies]);

  const handleIsSaved = (movie) => {
    if (!isSavedMovies) {
      const savedMovie = savedMovies.find((film) => film.movieId === movie.id);
      return !!savedMovie;
    }
    return true;
  };

  return (
    <section
      className={`movies-card-list ${
        isSavedMovies ? "movies-card-list_type_saved-movies" : ""
      }`}
    >
      {movies.length !== 0 ? (
        <div className="movies-card-list__container">
          {currentMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={isSavedMovies ? movie._id : movie.id}
              isSavedMovies={isSavedMovies}
              onClick={onClick}
              isSaved={handleIsSaved(movie)}
            />
          ))}
        </div>
      ) : (
        <p className="movies-card-list__title">
          {messageText || "Нужно ввести ключевое слово"}
        </p>
      )}
      {movies.length > initialCount + currentPage * step && !isSavedMovies && (
        <Button
          modifier="more"
          text="Еще"
          handler={showMoreItems}
          type="button"
        />
      )}
    </section>
  );
};

export default MoviesCardList;
