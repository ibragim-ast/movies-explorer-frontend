import React, { useState, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import auth from "../../utils/Auth.js";
import { api } from "../../utils/Api";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import { exampleMovies } from "../../utils/constants";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt && !loggedIn) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoading(false);
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setIsLoading(true);
    }
  }, [loggedIn, navigate]);

  function handleRegisterSubmit(formValue) {
    auth
      .register(formValue)
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginSubmit(data) {
    auth
      .authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignout() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    navigate("/sign-in", { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={<Register onSubmit={handleRegisterSubmit} />}
          ></Route>
          <Route
            path="/signin"
            element={<Login onLogin={handleLoginSubmit} />}
          ></Route>
          <Route
            path="/profile"
            signOut={handleSignout}
            element={<Profile handleUpdateUser={handleUpdateUser} />}
          ></Route>
          <Route
            path="/movies"
            element={<Movies exampleMovies={exampleMovies} />}
          ></Route>
          <Route
            path="/saved-movies"
            element={<SavedMovies exampleMovies={exampleMovies} />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
