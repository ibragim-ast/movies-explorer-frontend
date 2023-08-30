import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import useFormValidator from "../../hooks/useFormValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useCallback, useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  MAX_SHORT_MOVIE_DURATION,
  ERROR,
  ERROR_400,
  ERROR_401,
  ERROR_409,
  EMAIL_ALREADY_REGISTERED_MESSAGE,
  INCORRECT_ADD_USER_DATA,
  REG_ERROR_MESSAGE,
  AUTH_ERROR_MESSAGE,
  INVALID_AUTH_DATA_ERROR_MESSAGE,
} from "../../utils/constants";

function App() {
  const { values, errors, handleChange, isValid, setValues, resetForm } =
    useFormValidator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [regErrorMessage, setRegErrorMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();
  const { pathname } = useLocation;

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt && !isLoggedIn) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log("token check error:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    tokenCheck();
    if (isLoggedIn) {
      const currentPath = pathname;
      setIsLoading(true);
      mainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          navigate(currentPath, { replace: true });
        })
        .catch((error) => {
          console.log(`${ERROR}: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn, navigate, pathname, tokenCheck]);

  const handleRegistration = ({ name, email, password }) => {
    mainApi
      .register({ name, email, password })
      .then(() => {
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
        setCurrentUser({ name, email });
        setRegErrorMessage("");
      })
      .catch((err) => {
        console.log("register-error:", err);
        if (err === ERROR_409) {
          setRegErrorMessage(EMAIL_ALREADY_REGISTERED_MESSAGE);
        } else if (err === ERROR_400) {
          setRegErrorMessage(INCORRECT_ADD_USER_DATA);
        } else {
          setRegErrorMessage(REG_ERROR_MESSAGE);
        }
      });
  };

  const handleLogin = (data) => {
    mainApi
      .authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        if (err === ERROR_401) {
          setAuthErrorMessage(INVALID_AUTH_DATA_ERROR_MESSAGE);
        } else {
          setAuthErrorMessage(AUTH_ERROR_MESSAGE);
        }
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.clear();
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((error) => {
        console.log(`${ERROR}: ${error}`);
      });
  };

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteSavedMovie(movieId)
      .then(({ _id: deleteMovieId }) => {
        const updatedSavedMovies = savedMovies.filter(
          ({ _id }) => _id !== deleteMovieId
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((error) => {
        console.log(`${ERROR}: ${error}`);
      });
  };

  const filterShortMovies = (movie) =>
    movie.filter(({ duration }) => duration <= MAX_SHORT_MOVIE_DURATION);

  const filterMoviesByName = (movies, request) =>
    movies.filter(
      ({ nameRU, nameEN }) =>
        nameRU.toLowerCase().includes(request.toLowerCase()) ||
        nameEN.toLowerCase().includes(request.toLowerCase())
    );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isValid={isValid}
                    setValues={setValues}
                    onLogout={handleLogout}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    isLoggedIn={isLoggedIn}
                    values={values}
                    errors={errors}
                    isValid={isValid}
                    setValues={setValues}
                    handleChange={handleChange}
                    savedMovies={savedMovies}
                    onSaveMovies={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    filterShortMovies={filterShortMovies}
                    filterMoviesByName={filterMoviesByName}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    isLoggedIn={isLoggedIn}
                    values={values}
                    errors={errors}
                    isValid={isValid}
                    setValues={setValues}
                    handleChange={handleChange}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    filterMoviesByName={filterMoviesByName}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  isValid={isValid}
                  onSubmit={handleRegistration}
                  resetForm={resetForm}
                  requestErrorMessage={regErrorMessage}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  isValid={isValid}
                  onSubmit={handleLogin}
                  resetForm={resetForm}
                  requestErrorMessage={authErrorMessage}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
