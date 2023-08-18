import Title from "../Title/Title";
import TechIcon from "./TechIcon/TechIcon";
import { STACK } from "../../utils/constants";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <Title title="Технологии" />
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          {STACK.map((tech) => (
            <TechIcon key={tech} title={tech} />
          ))}
        </ul>
      </div>
    </section>
  );
}
