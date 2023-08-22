import "./FitterCheckbox.css";

const FitterCheckbox = () => {
  return (
    <div className="filter-checkbox__container">
      <input className="filter-checkbox__switch" type="checkbox" id="switch" />
      <label className="filter-checkbox__label button-hover" htmlFor="switch">
        Короткометражки
      </label>
    </div>
  );
};

export default FitterCheckbox;
