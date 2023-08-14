import { exampleMovies } from "../../utils/constants";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";

export default function Movies() {
  return (
    <section className="movies">
      <div className="movies__container">
        <Header />
        <SearchForm />
        <MoviesCardList exampleMovies={exampleMovies} />
        <Footer />
      </div>
    </section>
  );
}
