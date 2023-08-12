import { Navigate } from "react-router-dom";
import "./ErorPage.css";

export default function ErrorPage() {
  const handleGoBack = () => {
    return <Navigate to=".." />;
  };

  return (
    <section className="error-page">
      <div className="error-page__message">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__text">Страница не найдена</p>
        <button className="error-page__btn" onClick={handleGoBack}>
          Назад
        </button>
      </div>
    </section>
  );
}
