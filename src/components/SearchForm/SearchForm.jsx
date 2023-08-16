import FitterCheckbox from "../FilterCheckbox/FitterCheckbox";
import Button from "../Button/Button";
import Icons from "../Icons";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form" name="search-movie">
      <div className="search-form__string">
        <Icons.Search className={"search-form__icon"} />
        <input
          className="search-form__input"
          type="film-query"
          placeholder="Фильм"
        />
        <Button modifier="search" text="Найти" />
        <span className="search-form__line"></span>
        <FitterCheckbox />
      </div>
      <span className="search-form__error"></span>
    </form>
  );
};

export default SearchForm;
