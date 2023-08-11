import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        <ul className="header__links">
          <li>
            <Link className="header__link header__register-link">
              Регистрация
            </Link>
          </li>
          <li>
            <Link className="header__link header__login-link">Войти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
