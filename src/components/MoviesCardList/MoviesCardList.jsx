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

const MoviesCardList = ({ exampleMovies }) => {
  const [visibleItems, setVisibleItems] = useState(12);
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMoviesSavedPage = location.pathname === "/saved-movies";
  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 4);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkWindowWidth = () => {
      if (windowWidth >= 1280) {
        setVisibleItems(MOVIES_PER_PAGE_LARGE);
      } else if (windowWidth >= 768) {
        setVisibleItems(MOVIES_PER_PAGE_MIDDLE);
      } else {
        setVisibleItems(MOVIES_PER_PAGE_SMALL);
      }
    };

    checkWindowWidth();
  }, [windowWidth]);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <div className="movies-cards">
      <ul className="movies-card__list">
        {exampleMovies.slice(0, visibleItems).map((card) => (
          <MoviesCard
            key={card.movieId}
            movieId={card.movieId}
            duration={card.duration}
            image={card.image}
            name={card.nameRU}
          />
        ))}
      </ul>
      {!isMoviesSavedPage && (
        <div className="movies-card__more">
          <Button modifier="more" text="Еще" handler={showMoreItems} />
        </div>
      )}
    </div>
  );
};

export default MoviesCardList;
