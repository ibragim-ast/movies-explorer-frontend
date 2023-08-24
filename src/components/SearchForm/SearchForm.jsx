import FitterCheckbox from "../FilterCheckbox/FitterCheckbox";
import Button from "../Button/Button";
import searchIcon from "../../assets/images/search-icon.svg";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section>
      <form className="search-form" name="search-movie">
        <div className="search-form__string">
          <img src={searchIcon} alt="поиск" className={"search-form__icon"} />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
          />
          <Button modifier="search" text="Найти" />
          <span className="search-form__line"></span>
          <FitterCheckbox />
        </div>
        <span className="search-form__error"></span>
      </form>
    </section>
  );
};

export default SearchForm;
