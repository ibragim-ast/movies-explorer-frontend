import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__info">
        <p className="footer__copyright">&copy;2023</p>
        <nav className="footer__navigation">
          <ul className="footer__navigation-links">
            <li>
              <Link
                className="footer__navigation-link link-hover"
                href="https://practicum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                className="footer__navigation-link link-hover"
                href="https://github.com/ibragim-ast"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
