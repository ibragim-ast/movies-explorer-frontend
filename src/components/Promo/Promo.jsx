import Icons from "../Icons";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <Icons.Pattern className="promo__pattern" />
      </div>
    </section>
  );
};

export default Promo;
