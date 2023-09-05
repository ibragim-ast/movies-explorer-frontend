import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Button from "../Button/Button";
import searchIcon from "../../assets/images/search-icon.svg";
import "./SearchForm.css";

const SearchForm = ({
  values,
  errors,
  isValid,
  setValues,
  handleChange,
  onSubmit,
  onChange,
  isShortMovie,
}) => {
  // Получаем текущий путь из react-router-dom
  const { pathname } = useLocation();
  // Проверяем, находимся ли мы на странице "Сохраненные фильмы"
  const isSavedMoviesPage = pathname === "/saved-movies";

  // Обработчик отправки формы поиска
  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit(values.search, isShortMovie);
  };

  // Эффект для автозаполнения поля поиска из localStorage
  useEffect(() => {
    if (!isSavedMoviesPage) {
      const savedSearch = localStorage.getItem("request");
      if (savedSearch) {
        setValues({ search: savedSearch });
      }
    } else {
      setValues("");
    }
  }, [isSavedMoviesPage, setValues]);

  return (
    <section>
      <form
        className="search-form"
        name="search"
        onSubmit={handleSearch}
        noValidate
      >
        <div className="search-form__string">
          <img src={searchIcon} alt="поиск" className={"search-form__icon"} />

          <input
            className={`search-form__input ${
              errors.search ? "search-form__input_type_error" : ""
            }`}
            type="text"
            name="search"
            placeholder="Фильм"
            autoComplete="off"
            required
            value={values.search ?? ""}
            onChange={handleChange}
          />

          <Button
            modifier="search"
            text="Найти"
            aria-label="Поиск"
            disabled={!isValid}
          />

          <span className="search-form__line"></span>
          <FilterCheckbox onChange={onChange} value={isShortMovie} />
        </div>

        <span className="search-form__error">{errors.search}</span>
      </form>
    </section>
  );
};

export default SearchForm;
