import "./AuthPage.css";
import logo from "../../assets/images/logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const AuthPage = ({
  title,
  inputs,
  buttonText,
  buttonModifier,
  values,
  errors,
  handleChange,
  isValid,
  resetForm,
  onSubmit,
  requestErrorMessage,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    onSubmit(values, () => {
      resetForm();
      setIsLoading(false);
    });
  };

  return (
    <section className="auth-page">
      <Link to="/" className="auth-page__logo-link link-hover">
        <img className="auth-page__logo" src={logo} alt="Логотип" />
      </Link>
      <form
        className="auth-page__form"
        name="signInForm"
        onSubmit={handleSubmit}
      >
        <h1 className="auth-page__title">{title}</h1>
        <div className="auth-page__form-container">
          {inputs.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={values[input.name] || ""}
              error={errors[input.name]}
              handleChange={handleChange}
              required={input.required}
              minLength={input.minLength}
              maxLength={input.maxLength}
              autoComplete={input.autoComplete}
              pattern={input.pattern}
            />
          ))}
        </div>
        <p className="auth-page__request-error">{requestErrorMessage}</p>
        <Button
          modifier={buttonModifier}
          text={buttonText}
          disabled={!isValid || isLoading}
        />
      </form>
    </section>
  );
};

export default AuthPage;
