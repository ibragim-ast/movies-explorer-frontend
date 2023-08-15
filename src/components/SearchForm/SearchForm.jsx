import FitterCheckbox from "../FilterCheckbox/FitterCheckbox";
import Icons from "../Icons";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form" name="search-movie">
      <div className="search-form__string">
        <Icons.Search className={"search-form__icon"} />
        {/* <img className="search-form__icon" src={iconSearch} alt="#" /> */}
        <input
          className="search-form__input"
          type="film-query"
          placeholder="Фильм"
        />
        <button className="search-form__btn" type="submit">
          Найти
        </button>
        <span className="search-form__line"></span>
        <FitterCheckbox />
      </div>
      <span className="search-form__error"></span>
    </form>
  );
};

export default SearchForm;
