import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__projects-list">
        <li className="portfolio__project">
          <a className="portfolio__link" href="example.com">
            Статичный сайт
          </a>
          <span className="project__arrow">↗</span>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__link" href="example.com">
            Адаптивный сайт
          </a>
          <span className="project__arrow">↗</span>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__link" href="example.com">
            Одностраничное приложение
          </a>
          <span className="project__arrow">↗</span>
        </li>
      </ul>
    </section>
  );
}
