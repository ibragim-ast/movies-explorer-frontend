import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";

export default function MoviesCardList({ exampleMovies }) {
  const itemsPerPage = 12;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + itemsPerPage);
  };

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
      <div className="movies-card__more">
        <Button modifier="more" text="Еще" handler={showMoreItems} />
      </div>
    </div>
  );
}
