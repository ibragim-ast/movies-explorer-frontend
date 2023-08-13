import Header from "../Header/Header";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <section className="profile">
        <Header />
        <div className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <fieldset className="profile__input-container">
              <label className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                name="name"
                label="Имя"
                type="text"
              />
              <label className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                name="email"
                label="E-mail"
                type="email"
              />
            </fieldset>
          </form>
          <div className="profile__buttons">
            <button className="profile__button">Редактировать</button>
            <button className="profile__button profile__button_red-text">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
