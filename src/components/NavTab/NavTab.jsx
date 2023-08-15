import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavTab.css";

export default function NavTab() {
  const location = useLocation();

  return (
    <div className="navtab">
      <div className="navtab__links">
        <Link
          className={`navtab__link ${
            location.pathname === "/movies" ? "navtab__link_active" : ""
          }`}
          to="/movies"
        >
          Фильмы
        </Link>
        <Link
          className={`navtab__link ${
            location.pathname === "/saved-movies" ? "navtab__link_active" : ""
          }`}
          to="/saved-movies"
        >
          Сохраненные фильмы
        </Link>
      </div>
    </div>
  );
}
