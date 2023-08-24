import "./AuthPage.css";
import logo from "../../assets/images/logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AuthPage = ({
  title,
  inputs,
  buttonText,
  buttonModifier,
  values,
  errors,
  handleChange,
  isValid,
}) => {
  return (
    <section className="auth-page">
      <Link to="/" className="auth-page__logo-link link-hover">
        <img className="auth-page__logo" src={logo} alt="Логотип" />
      </Link>
      <form className="auth-page__form">
        <h1 className="auth-page__title">{title}</h1>
        <div className="auth-page__form-container">
          {inputs.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              type={input.type}
              name={input.name}
              value={values[input.name] || ""}
              error={errors[input.name]}
              handleChange={handleChange}
              required={input.required}
              minLength={input.minLength}
              maxLength={input.maxLength}
              autoComplete={input.autoComplete}
            />
          ))}
        </div>
        <Button
          modifier={buttonModifier}
          text={buttonText}
          disabled={!isValid}
        />
      </form>
    </section>
  );
};

export default AuthPage;
