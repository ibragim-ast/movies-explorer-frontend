import { Link } from "react-router-dom";
import "./AuthLinks.css";

export default function AuthLinks() {
  return (
    <div className="auth-links">
      <Link to="/signup">
        <button className="auth__link auth__link_type_register link-hover">
          Регистрация
        </button>
      </Link>
      <Link to="/signin">
        <button className="auth__link auth__link_type_login button-hover">
          Войти
        </button>
      </Link>
    </div>
  );
}
