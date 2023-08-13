import { Link, useLocation } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import AuthLinks from "../AuthLinks/AuthLinks";
import AccountButton from "../AccountButton/AccountButton";
import Container from "../Container/Container";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  const shouldShowNavTab = ["/movies", "/saved-movies", "/profile"].includes(
    location.pathname
  );

  return (
    <Container>
      <header className="header app__header">
        <nav className="header__nav">
          <Link className="header__linked-logo" to="/">
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>
          <div className="header__links">{shouldShowNavTab && <NavTab />}</div>
        </nav>
        {shouldShowNavTab ? <AccountButton /> : <AuthLinks />}
      </header>
    </Container>
  );
}
