import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Navigation from "../Navigation/Navigation";
import AuthLinks from "../AuthLinks/AuthLinks";

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className={`header ${isLanding ? "header_type_landing" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__link button-hover">
          <img className="header__logo" src={logo} alt="логотип" />
        </Link>
        {isLoggedIn ? <Navigation /> : <AuthLinks />}
      </div>
    </header>
  );
};

export default Header;
