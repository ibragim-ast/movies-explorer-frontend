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
    <div className="input__container">
      <label className="input__title">{label}</label>
      <input
        className="input"
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
