import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import { exampleMovies } from "../../utils/constants";
import auth from "../../utils/Auth.js";
import "./App.css";

function App() {
  const navigate = useNavigate();

  function handleRegister(formValue) {
    auth
      .register(formValue)
      .then(() => {
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signup"
          element={<Register onSubmit={handleRegister} />}
        ></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
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
  );
}

export default App;
