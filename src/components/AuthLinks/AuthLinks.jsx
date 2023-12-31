import { Link } from "react-router-dom";
import "./AuthLinks.css";

export default function AuthLinks() {
  return (
    <nav className="auth-links">
      <Link
        className="auth-links__link auth-links__link_type_register link-hover"
        to="/signup"
      >
        Регистрация
      </Link>
      <Link
        className="auth-links__link auth-links__link_type_login link-hover"
        to="/signin"
      >
        Войти
      </Link>
    </nav>
  );
}
