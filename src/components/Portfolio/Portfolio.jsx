import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__projects-list">
        <li className="portfolio__project">
          <a
            className="portfolio__link link-hover"
            href="example.com"
            target="_blank"
          >
            Статичный сайт
          </a>
          <span className="project__arrow">↗</span>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__link link-hover"
            href="example.com"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <span className="project__arrow">↗</span>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__link link-hover" href="example.com">
            Одностраничное приложение
          </a>
          <span className="project__arrow">↗</span>
        </li>
      </ul>
    </section>
  );
}
