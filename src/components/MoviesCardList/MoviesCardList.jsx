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

const MoviesCardList = ({ movies }) => {
  const [visibleItems, setVisibleItems] = useState();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMoviesSavedPage = location.pathname === "/saved-movies";

  const showMoreItems = () => {
    if (windowWidth >= 1280) {
      setVisibleItems((prev) => prev + 4);
    } else if (windowWidth >= 768) {
      setVisibleItems((prev) => prev + 4);
    } else {
      setVisibleItems((prev) => prev + 2);
    }
  };

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

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

  return (
    <div className="movies-cards">
      <div
        className={`movies-cards__list ${
          isMoviesSavedPage ? "movies-cards__list_type_saved" : ""
        }`}
      >
        {movies.slice(0, visibleItems).map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
      {!isMoviesSavedPage && (
        <Button
          modifier="more"
          text="Еще"
          handler={showMoreItems}
          type="button"
        />
      )}
    </div>
  );
};

export default MoviesCardList;
