import { useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";

export default function MoviesCardList({ exampleMovies }) {
  const itemsPerPage = 16;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const location = useLocation();

  const isMoviesSavedPage = location.pathname === "/saved-movies";
  const showMoreItems = () => {
    setVisibleItems((prev) => prev + itemsPerPage);
  };

  console.log(isMoviesSavedPage);

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
}
