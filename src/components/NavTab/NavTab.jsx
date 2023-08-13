import { Link } from "react-router-dom";
import "./NavTab.css";

export default function NavTab() {
  return (
    <div className="navtab">
      <div className="navtab__links">
        <Link className="navtab__link" to="/movies">
          Фильмы
        </Link>
        <Link className="navtab__link" to="/saved-movies">
          Сохраненные фильмы
        </Link>
      </div>
    </div>
  );
}
