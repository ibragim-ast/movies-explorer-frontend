const Input = ({
  name,
  type,
  handleChange,
  placeholder,
  errors,
  values,
  className,
  ...props
}) => {
  return (
    <>
      <span className="input__title">{props.title}</span>
      <input
        name={name}
        type={type}
        onChange={handleChange}
        values={values[name] || ""}
        className={`${className} ${
          errors[name] ? `${className} form__input-error` : className
        }`}
        placeholder={placeholder}
        required
        autoComplete="off"
        ref={props.inputRef}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
      <span
        className={
          errors[name]
            ? "form__input-error form__input-error_active"
            : "form__input-error"
        }
      >
        {errors[name]}
      </span>
    </>
  );
};

export default Input;
