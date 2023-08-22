import logo from "../../assets/images/logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import CTA from "../CTA/CTA";
import "./Login.css";

export default function Login() {
  return (
    <>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип" />
        <form className="login__form">
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__form-container">
            <Input label="E-mail" type="email" name="email" />
            <Input label="Пароль" type="password" name="password" />
          </div>
          <Button
            className="register__submit-btn"
            modifier="register"
            text="Войти"
          />
        </form>
      </section>
      <CTA
        text="Ещё не зарегистрированы?"
        to="/signup"
        linkText="Регистрация"
      />
    </>
  );
}
