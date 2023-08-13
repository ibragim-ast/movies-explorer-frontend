import { Link, useLocation } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  const shouldShowNavTab = ["/movies", "/saved-movies", "/profile"].includes(
    location.pathname
  );

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        <div className="header__nav-panel">
          {shouldShowNavTab && <NavTab />}
          <div className="header__links">
            <Link to="/signup">
              <button className="header__link header__register-link">
                Регистрация
              </button>
            </Link>
            <Link to="/signin">
              <button className="header__link header__login-link">Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
