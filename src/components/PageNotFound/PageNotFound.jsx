import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__message">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <button className="not-found__btn" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </section>
  );
}
