import "./AboutProject.css";
import Title from "../Title/Title";

export default function AboutProject() {
  return (
    <section className="about-project">
      <Title title="О проекте"></Title>
      <div className="about-project__cards-container">
        <div className="about-project__card">
          <h3 className="about-project__card-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__card-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__card">
          <h3 className="about-project__card-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__card-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__roadmap-scale">
        <p className="about-project__info about-project__info_type_one-week">
          1 неделя
        </p>
        <p className="about-project__info about-project__info_type_four-week">
          4 недели
        </p>
      </div>
      <div className="about-project__roadmap-tech">
        <p className="about-project__fullstack about-project__fullstack_type_back">
          Back-end
        </p>
        <p className="about-project__fullstack about-project__fullstack_type_front">
          Front-end
        </p>
      </div>
    </section>
  );
}
