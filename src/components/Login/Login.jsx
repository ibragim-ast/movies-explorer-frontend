import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <img className="login__logo" src={logo} alt="Логотип" />
        <form className="login__form">
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__form-container">
            <div className="login__input-container">
              <span className="login__input-title">E-mail</span>
              <input className="login__input" type="email" name="email" />
              <span className="login__input-error"></span>
            </div>
            <div className="login__input-container">
              <span className="login__input-title">Пароль</span>
              <input className="login__input" type="password" name="password" />
              <span className="login__input-error"></span>
            </div>
          </div>
          <button className="login__submit-btn" type="submit">
            Войти
          </button>
        </form>
        <div className="login__message">
          <p>Ещё не зарегистрированы?</p>
          <Link className="login-link" to="/sign-up">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}
