import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import useFormValidator from "../../hooks/useFormValidation";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import { useCallback, useState, useEffect } from "react";
import mainApi from "../../utils/MainApi";

function App() {
  const { values, errors, handleChange, isValid, setValues, resetForm } =
    useFormValidator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

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
      setIsLoading(true);
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    tokenCheck();
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [isLoggedIn, tokenCheck]);

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

  return (
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
            />
          }
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
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
  );
}

export default App;
