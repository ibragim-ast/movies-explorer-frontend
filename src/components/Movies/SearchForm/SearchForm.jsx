import "./SearchForm.css";
import iconSearch from "../../../images/icon-search.png";

const SearchForm = () => {
  return (
    <form className="search-form" name="search-movie">
      <div className="search-form__string">
        <img className="search-form__icon" src={iconSearch} alt="#" />
        <input
          className="search-form__input"
          type="film-query"
          placeholder="Фильм"
        />
        <button className="search-form__btn" type="submit">
          Найти
        </button>
        <div className="search-form__switch-container">
          <input className="search-form__switch" type="checkbox" id="switch" />
          <label className="search-form__switch-label" htmlFor="switch">
            Короткометражки
          </label>
        </div>
      </div>
      <span className="search-form__error"></span>
    </form>
  );
};

export default SearchForm;
