import "./FilterCheckbox.css";

const FilterCheckbox = ({ onChange, value }) => {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__switch"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={onChange}
        checked={value}
      />
      <label className="filter-checkbox__label link-hover" htmlFor="checkbox">
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
