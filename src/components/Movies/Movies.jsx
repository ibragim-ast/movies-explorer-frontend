import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import Footer from "../Footer/Footer";
import "./Movies.css";

const Movies = ({ exampleMovies }) => {
  return (
    <main className="movies">
      <Header />
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList exampleMovies={exampleMovies} />
      </div>
      <Footer />
    </main>
  );
};

export default Movies;
