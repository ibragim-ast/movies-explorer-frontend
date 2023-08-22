import "./AuthPage.css";
import logo from "../../assets/images/logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";

const AuthPage = ({ title, inputs, buttonText, buttonModifier }) => {
  return (
    <section className="auth-page">
      <img className="auth-page__logo" src={logo} alt="Логотип" />
      <form className="auth-page__form">
        <h1 className="auth-page__title">{title}</h1>
        <div className="auth-page__form-container">
          {inputs.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              type={input.type}
              name={input.name}
            />
          ))}
        </div>
        <Button
          className="auth__submit-btn"
          modifier={buttonModifier}
          text={buttonText}
        />
      </form>
    </section>
  );
};

export default AuthPage;
