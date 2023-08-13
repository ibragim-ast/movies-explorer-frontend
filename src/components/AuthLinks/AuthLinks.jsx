import { Link } from "react-router-dom";
import "./AuthLinks.css";

export default function AuthLinks() {
  return (
    <div className="auth-links">
      <Link to="/signup">
        <button className="auth__link auth__register-link">Регистрация</button>
      </Link>
      <Link to="/signin">
        <button className="auth__link auth__login-link">Войти</button>
      </Link>
    </div>
  );
}
