import pattern from "../../assets/images/pattern.svg";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img src={pattern} alt="узор" className="promo__pattern" />
      </div>
    </section>
  );
};

export default Promo;
