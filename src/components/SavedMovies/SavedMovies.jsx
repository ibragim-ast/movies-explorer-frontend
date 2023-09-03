import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import { useEffect, useState } from "react";
import {
  NO_RESULTS_MESSAGE,
  REQUEST_ERROR_MESSAGE,
} from "../../utils/constants";

const SavedMovies = ({
  isLoggedIn,
  values,
  errors,
  setValues,
  isValid,
  handleChange,
  savedMovies,
  onDeleteMovie,
  filterMoviesByName,
  filterShortMovies,
}) => {
  const [message, setMessage] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [requestText, setRequestText] = useState("");
  const [isShortMovie, setIsShortMovie] = useState(false);

  const handleDeleteMovie = ({ _id: movieId }) => {
    onDeleteMovie(movieId);
  };

  const handleCheckbox = () => {
    if (savedMovies) {
      setIsShortMovie(!isShortMovie);
    }
  };

  const handleSearchMovies = async (request, isShort) => {
    if (savedMovies) {
      setMessage("");
      setRequestText(request);
      setFilteredMovies(filterMoviesByName(savedMovies, request, isShort));
    }
  };

  useEffect(() => {
    if (savedMovies) {
      const filteredFilms = filterMoviesByName(
        savedMovies,
        requestText,
        isShortMovie
      );
      if (filteredFilms.length === 0) {
        setMessage(NO_RESULTS_MESSAGE);
      }
      setFilteredMovies(
        isShortMovie ? filterShortMovies(filteredFilms) : filteredFilms
      );
      return;
    }
    setMessage(REQUEST_ERROR_MESSAGE);
  }, [
    filterMoviesByName,
    filterShortMovies,
    isShortMovie,
    requestText,
    savedMovies,
  ]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <div className="movies__container">
          <SearchForm
            values={values}
            errors={errors}
            isValid={isValid}
            setValues={setValues}
            handleChange={handleChange}
            onSubmit={handleSearchMovies}
            onChange={handleCheckbox}
            isShortMovie={isShortMovie}
          />
          <MoviesCardList
            movies={filteredMovies}
            messageText={message}
            onClick={handleDeleteMovie}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
