import Title from "../Title/Title";
import photo from "../../assets/images/photo.png";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="about-me">
      <Title title="Студент" />
      <div className="student">
        <div className="student__info">
          <h3 className="student__name">Ибрагим</h3>
          <h4 className="student__profession">Фронтенд-разработчик, 38 лет</h4>
          <p className="student__description">
            Я родился и живу в Грозном, закончил факультет истории ЧГУ. Женат, 5
            детей. Люблю компьютерные игры, прогулки и покататься на велосипеде.
            С 2022 года поставил себе цель - освоить профессию программиста. С
            самого начала у меня есть какой-то план и я его придерживаюсь.
            Стараюсь совершенствоваться.
          </p>
          <a
            className="student__github link-hover"
            href="https://github.com/ibragim-ast"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="student__photo" src={photo} alt="Фото" />
      </div>
      <Portfolio />
    </section>
  );
}
