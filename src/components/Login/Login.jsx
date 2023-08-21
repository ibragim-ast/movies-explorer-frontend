import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Login.css";

export default function Login() {
  return (
    <>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип" />
        <form className="login__form">
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__form-container">
            <div className="login__input-container">
              <label className="login__input-title">E-mail</label>
              <input className="login__input" type="email" name="email" />
              <span className="login__input-error"></span>
            </div>
            <div className="login__input-container">
              <label className="login__input-title">Пароль</label>
              <input className="login__input" type="password" name="password" />
              <span className="login__input-error"></span>
            </div>
          </div>
          <Button
            className="register__submit-btn"
            modifier="register"
            text="Войти"
          />
        </form>
      </section>
      <div className="login__cta">
        <p>Ещё не зарегистрированы?</p>
        <Link className="login-link" to="/signup">
          Регистрация
        </Link>
      </div>
    </>
  );
}
