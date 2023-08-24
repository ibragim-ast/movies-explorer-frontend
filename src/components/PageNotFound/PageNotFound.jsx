import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__info">
        <h3 className="not-found__title">404</h3>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button
        className="not-found__btn button-hover"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </section>
  );
};

export default PageNotFound;
