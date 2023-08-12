import { useNavigate } from "react-router-dom";
import "./ErorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section className="error-page">
      <div className="error-page__message">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__text">Страница не найдена</p>
        <button className="error-page__btn" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </section>
  );
}
