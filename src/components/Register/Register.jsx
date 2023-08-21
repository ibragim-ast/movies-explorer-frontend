import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Register.css";

export default function Register() {
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Логотип" />
      <form className="register__form">
        <h1 className="register__title">Добро пожаловать!</h1>
        <div className="register__form-container">
          <div className="register__input-container">
            <span className="register__input-title">Имя</span>
            <input className="register__input" type="name" name="name" />
            <span className="register__input-error"></span>
          </div>
          <div className="register__input-container">
            <span className="register__input-title">E-mail</span>
            <input className="register__input" type="email" name="email" />
            <span className="register__input-error"></span>
          </div>
          <div className="register__input-container">
            <span className="register__input-title">Пароль</span>
            <input
              className="register__input"
              type="password"
              name="password"
            />
            <span className="register__input-error"></span>
          </div>
        </div>
        <Button modifier="register" text="Зарегистрироваться" />
      </form>
      <div className="register__cta">
        <p>Уже зарегистрированы?</p>
        <Link className="register-link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
}
