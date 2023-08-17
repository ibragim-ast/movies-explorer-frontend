import "./AboutProject.css";
import Title from "../Title/Title";

export default function AboutProject() {
  return (
    <section className="about">
      <div className="about__container">
        <Title title="О проекте"></Title>
        <div className="about__cards-container">
          <div className="about__card">
            <h3 className="about__card-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__card-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__card">
            <h3 className="about__card-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__card-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__time-scale">
          <p className="about__one-week">1 неделя</p>
          <p className="about__four-week">4 недели</p>
        </div>
        <div className="about__tech">
          <p className="about__back">Back-end</p>
          <p className="about__front">Front-end</p>
        </div>
      </div>
    </section>
  );
}
