import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        <div className="header__links">
          <Link to="/sign-up">
            <button className="header__link header__register-link">
              Регистрация
            </button>
          </Link>
          <Link to="/sign-in">
            <button className="header__link header__login-link">Войти</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
