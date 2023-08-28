import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import Footer from "../Footer/Footer";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <main className="movies">
      <Header />
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </div>
      <Footer />
    </main>
  );
};

export default Movies;
