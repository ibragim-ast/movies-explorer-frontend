import { useLocation } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import AuthLinks from "../AuthLinks/AuthLinks";
import AccountButton from "../AccountButton/AccountButton";
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
          {shouldShowNavTab ? <AccountButton /> : <AuthLinks />}
        </div>
      </div>
    </header>
  );
}
