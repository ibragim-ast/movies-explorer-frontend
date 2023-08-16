import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import { exampleMovies, savedMovies } from "../../utils/constants";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/movies"
          element={<Movies exampleMovies={exampleMovies} />}
        ></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies exampleMovies={savedMovies} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
