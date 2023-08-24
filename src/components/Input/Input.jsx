import "./Input.css";

const Input = ({
  label,
  type,
  name,
  value,
  error,
  handleChange,
  required,
  minLength,
  maxLength,
  autoComplete,
}) => {
  return (
    <div className="input">
      <label className="input__title">{label}</label>
      <input
        className="input__input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        autoComplete={autoComplete}
      />
      <span className="input__error">{error}</span>
    </div>
  );
};

export default Input;
