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
import { ERROR } from "../../utils/constants";

function App() {
  const { values, errors, handleChange, isValid, setValues, resetForm } =
    useFormValidator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();
  const { pathname } = useLocation;

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt && !isLoggedIn) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoading(false);
            setIsLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => console.log(err));
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

  const handleRegistration = (data) => {
    mainApi
      .register(data)
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
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
        console.log(err);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.clear();
  };

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
                <Profile
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  isValid={isValid}
                  setValues={setValues}
                  onLogout={handleLogout}
                />
              }
            />

            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies isLoggedIn={isLoggedIn} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies isLoggedIn={isLoggedIn} />
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
