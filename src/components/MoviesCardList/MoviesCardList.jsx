import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import {
  MOVIES_PER_PAGE_LARGE,
  MOVIES_PER_PAGE_MIDDLE,
  MOVIES_PER_PAGE_SMALL,
  BREAKPOINT_LARGE,
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
} from "../../utils/constants";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies, messageText, savedMovies, onClick }) => {
  const [visibleItems, setVisibleItems] = useState();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resizeTimer, setResizeTimer] = useState(null);
  const isMoviesSavedPage = location.pathname === "/saved-movies";
  const isMoreButtonVisible = visibleItems < movies.length;

  const showMoreItems = () => {
    if (windowWidth >= BREAKPOINT_LARGE) {
      setVisibleItems((prev) => prev + 4);
    } else if (
      windowWidth >= BREAKPOINT_MEDIUM &&
      windowWidth < BREAKPOINT_LARGE
    ) {
      setVisibleItems((prev) => prev + 2);
    } else if (
      windowWidth >= BREAKPOINT_SMALL &&
      windowWidth < BREAKPOINT_MEDIUM
    ) {
      setVisibleItems((prev) => prev + 2);
    }
  };

  const handleIsSaved = (movie) => {
    if (!isMoviesSavedPage) {
      const savedMovie = savedMovies.find((film) => film.movieId === movie.id);
      return !!savedMovie;
    }
    return true;
  };

  const handleResize = useCallback(() => {
    clearTimeout(resizeTimer);

    const timer = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    setResizeTimer(timer);
  }, [resizeTimer]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (!isMoviesSavedPage) {
      const checkWindowWidth = () => {
        if (windowWidth >= BREAKPOINT_LARGE) {
          setVisibleItems(MOVIES_PER_PAGE_LARGE);
        } else if (windowWidth >= BREAKPOINT_MEDIUM) {
          setVisibleItems(MOVIES_PER_PAGE_MIDDLE);
        } else {
          setVisibleItems(MOVIES_PER_PAGE_SMALL);
        }
      };

      checkWindowWidth();
    }
  }, [windowWidth, movies.length, isMoviesSavedPage]);

  return (
    <section className="movies-cards-list">
      <>
        {movies.length !== 0 ? (
          <div
            className={`movies-cards-list__container ${
              isMoviesSavedPage ? "movies-cards-list__container_type_saved" : ""
            }`}
          >
            {movies.slice(0, visibleItems).map((movie) => (
              <MoviesCard
                movie={movie}
                key={isMoviesSavedPage ? movie._id : movie.id}
                onClick={onClick}
                isSaved={handleIsSaved(movie)}
                isMoviesSavedPage={isMoviesSavedPage}
              />
            ))}
          </div>
        ) : (
          <p className="movies-card-list__title">
            {messageText || "Нужно ввести ключевое слово"}
          </p>
        )}
        {!isMoviesSavedPage && isMoreButtonVisible && (
          <Button
            modifier="more"
            text="Еще"
            handler={showMoreItems}
            type="button"
          />
        )}
      </>
    </section>
  );
};

export default MoviesCardList;
