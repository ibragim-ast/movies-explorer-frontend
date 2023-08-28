import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";
import "./Movies.css";

const Movies = () => {
  const savedCheckbox =
    JSON.parse(localStorage.getItem("isShortMovie")) ?? false;
  const [isShortMovie, setisShortMovie] = useState(savedCheckbox);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckBox = () => {
    setisShortMovie(!isShortMovie);
    localStorage.setItem("isShortMovie", JSON.stringify(!isShortMovie));
  };

  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getInitialMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="movies">
      <Header />
      <div className="movies__container">
        <SearchForm onChange={handleCheckBox} />
        {isLoading ? <p>Loading...</p> : <MoviesCardList movies={movies} />}
      </div>
      <Footer />
    </main>
  );
};

export default Movies;
