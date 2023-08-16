import { useState } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Profile.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

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
                onFocus={() => setIsEditing(true)}
              />
              <label className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                name="email"
                label="E-mail"
                type="email"
                onFocus={() => setIsEditing(true)}
              />
            </fieldset>
          </form>
          <div className="profile__buttons">
            {!isEditing ? (
              <>
                <button
                  className={`profile__button ${
                    isEditing ? "profile__button_disabled" : ""
                  }`}
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
                <button
                  className={`profile__button profile__button_red-text ${
                    isEditing ? "profile__button_disabled" : ""
                  }`}
                >
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <Button modifier="profile" text="Сохранить" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
