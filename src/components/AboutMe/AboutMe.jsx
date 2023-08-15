import Title from "../Main/Title/Title";
import photo from "../../images/photo.svg";
import "./AboutMe.css";
import Portfolio from "../Main/Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <Title title="Студент" />
        <div className="student">
          <div className="student__info">
            <h3 className="student__name">Ибрагим</h3>
            <h4 className="student__profession">
              Фронтенд-разработчик, 30 лет
            </h4>
            <p className="student__description">
              Я родился и живу в Грозном, закончил факультет истории ЧГУ. У меня
              есть жена и 5 детей. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2022 года занимаюсь
              веб-разработкой. После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="student__github"
              href="https://github.com/ibragim-ast"
            >
              Github
            </a>
          </div>
          <img className="student__photo" src={photo} alt="Фото" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}
