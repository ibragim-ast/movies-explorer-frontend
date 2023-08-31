import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";
import "./Movies.css";
import {
  ERROR,
  NO_RESULTS_MESSAGE,
  REQUEST_ERROR_MESSAGE,
} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

const Movies = ({
  isLoggedIn,
  values,
  errors,
  isValid,
  setValues,
  handleChange,
  savedMovies,
  onSaveMovies,
  onDeleteMovie,
  filterShortMovies,
  filterMoviesByName,
}) => {
  // Состояния компонента
  const savedCheckbox =
    JSON.parse(localStorage.getItem("isShortMovie")) ?? false;
  const allMovies = JSON.parse(localStorage.getItem("allMovies")) ?? [];
  const [isShortMovie, setIsShortMovie] = useState(savedCheckbox);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Обработчик для изменения чекбокса короткометражки
  const handleCheckBox = () => {
    setIsShortMovie(!isShortMovie);
    localStorage.setItem("isShortMovie", JSON.stringify(!isShortMovie));
  };

  // Функция для фильтрации и сохранения отфильтрованных фильмов
  const handleFilterMovies = (movies, request, isShort) => {
    const filteredFilms = filterMoviesByName(movies, request);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredFilms));
    if (!filteredFilms.length) {
      setMessage(NO_RESULTS_MESSAGE);
    }
    setFilteredMovies(
      isShort ? filterShortMovies(filteredFilms) : filteredFilms
    );
  };

  // Обработчик для добавления/удаления фильма из сохраненных
  const handleClickMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (savedFilm) => savedFilm.movieId === movie.id
    );
    if (savedMovie) {
      onDeleteMovie(savedMovie._id);
      return;
    }
    onSaveMovies(movie);
  };

  // Обработчик поиска фильма
  const handleSearchMovie = (req, isShort) => {
    setIsLoading(true);
    setMessage("");

    if (!allMovies.length) {
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          localStorage.setItem("allMovies", JSON.stringify(movies));
          handleFilterMovies(movies, req, isShort);
        })
        .catch((error) => {
          setMessage(REQUEST_ERROR_MESSAGE);
          console.log(`${ERROR}: ${error}`);
          setIsLoading(false);
        });
    } else {
      handleFilterMovies(allMovies, req, isShort);
    }

    localStorage.setItem("request", req);
    localStorage.setItem("isShortMovie", isShort);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const defaultMovies = JSON.parse(localStorage.getItem("filteredMovies"));
    if (defaultMovies) {
      if (defaultMovies.length !== 0) {
        setIsShortMovie(JSON.parse(localStorage.getItem("isShortMovie")));
        setFilteredMovies(
          isShortMovie ? filterShortMovies(defaultMovies) : defaultMovies
        );
      } else {
        setMessage(NO_RESULTS_MESSAGE);
      }
    }
    setIsLoading(false);
  }, [filterShortMovies, isShortMovie]);

  return (
    <main className="movies">
      <Header isLoggedIn={isLoggedIn} />
      <div className="movies__container">
        <SearchForm
          isLoading={isLoading}
          values={values}
          errors={errors}
          isValid={isValid}
          setValues={setValues}
          handleChange={handleChange}
          onSubmit={handleSearchMovie}
          onChange={handleCheckBox}
          isShortMovie={isShortMovie}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={filteredMovies}
            messageText={message}
            onClick={handleClickMovie}
            savedMovies={savedMovies}
          />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Movies;
