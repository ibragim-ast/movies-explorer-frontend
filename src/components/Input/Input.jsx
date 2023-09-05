import "./Input.css";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  error,
  handleChange,
  required,
  minLength,
  maxLength,
  autoComplete,
  pattern,
}) => {
  return (
    <div className="input">
      <label className="input__title">{label}</label>
      <input
        className="input__input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
      />
      <span className="input__error">{error}</span>
    </div>
  );
};

export default Input;
