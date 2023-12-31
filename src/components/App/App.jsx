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
  REQUIRED_AUTH_ERROR_MESSAGE,
  UPDATE_USER_INFO_MESSAGE,
  UPDATE_USER_INFO_ERROR_MESSAGE,
} from "../../utils/constants";

function App() {
  const {
    values,
    errors,
    handleChange,
    isValid,
    setValues,
    setIsValid,
    resetForm,
  } = useFormValidator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [regErrorMessage, setRegErrorMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [updateUserInfo, setUpdateUserInfo] = useState({
    message: "",
    isSuccess: true,
  });

  const navigate = useNavigate();
  const { pathname } = useLocation;

  const resetMessages = () => {
    setRegErrorMessage("");
    setAuthErrorMessage("");
    setUpdateUserInfo({ message: "", isSuccess: true });
  };

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt && !isLoggedIn) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
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
  }, [isLoggedIn]);

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

  const handleLogin = (data, resetForm) => {
    mainApi
      .authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
          resetForm();
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

  const handleRegistration = ({ name, email, password }) => {
    mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setCurrentUser({ name, email });
        setRegErrorMessage("");
        resetForm();
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

  const handleUpdateUserInfo = (userInfo) => {
    setUpdateUserInfo({ message: "", isSuccess: true });

    mainApi
      .updateUserInfo(userInfo)
      .then((user) => {
        setCurrentUser(user);
        setUpdateUserInfo({
          message: UPDATE_USER_INFO_MESSAGE,
          isSuccess: true,
        });
      })
      .catch((error) => {
        if (error === ERROR_409) {
          setUpdateUserInfo({
            message: EMAIL_ALREADY_REGISTERED_MESSAGE,
            isSuccess: false,
          });
        } else {
          setUpdateUserInfo({
            message: UPDATE_USER_INFO_ERROR_MESSAGE,
            isSuccess: false,
          });
        }
        console.log(`${ERROR}: ${error}`);
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
      .deleteMovie(movieId)
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

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      mainApi
        .getSavedMovies()
        .then((savedUserMovies) => {
          setSavedMovies(savedUserMovies);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          if (error === ERROR_401) {
            console.log(`${ERROR}: ${error} ${REQUIRED_AUTH_ERROR_MESSAGE}`);
            return;
          }
          console.log(`${ERROR}: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="app">
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    isLoggedIn={isLoggedIn}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isValid={isValid}
                    setIsValid={setIsValid}
                    setValues={setValues}
                    onLogout={handleLogout}
                    onSubmit={handleUpdateUserInfo}
                    requestStatus={updateUserInfo}
                    resetRequestMessage={resetMessages}
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
                    filterShortMovies={filterShortMovies}
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
                  isLoggedIn={isLoggedIn}
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
                  isLoggedIn={isLoggedIn}
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
