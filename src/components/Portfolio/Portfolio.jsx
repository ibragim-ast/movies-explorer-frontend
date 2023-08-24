import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__projects-list">
        <li className="portfolio__project">
          <a
            className="portfolio__link link-hover"
            href="https://ibragim-ast.github.io/burgers/"
            target="_blank"
            rel="noreferrer"
          >
            Сайт закусочной
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__link link-hover"
            href="https://ibragim-ast.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Сайт о путешествиях по России
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__link link-hover"
            href="https://github.com/ibragim-ast/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Приложение "Место"
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
      </ul>
    </section>
  );
}
