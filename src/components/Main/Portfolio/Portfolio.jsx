import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__projects-list">
          <li className="portfolio__project">
            <a className="portfolio__project-url" href="example.com">
              Статичный сайт
            </a>
            <span className="project__arrow">↗</span>
          </li>
          <li className="portfolio__project">
            <a className="portfolio__project-url" href="example.com">
              Адаптивный сайт
            </a>
            <span className="project__arrow">↗</span>
          </li>
          <li className="portfolio__project">
            <a className="portfolio__project-url" href="example.com">
              Одностраничное приложение
            </a>
            <span className="project__arrow">↗</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
