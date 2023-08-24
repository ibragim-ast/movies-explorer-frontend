import { Link } from "react-router-dom";
import "./AuthLinks.css";

export default function AuthLinks() {
  return (
    <nav className="auth-links">
      <Link
        className="auth-links__link auth-links__link_type_register"
        to="/signup"
      >
        Регистрация
      </Link>
      <Link
        className="auth-links__link auth-links__link_type_login button-hover"
        to="/signin"
      >
        Войти
      </Link>
    </nav>
  );
}
