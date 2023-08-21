import { useState } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Ибрагим!</h1>
          <form className="profile__form">
            <fieldset className="profile__input-container">
              <label className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                name="name"
                label="Имя"
                type="text"
                onFocus={() => setIsEditing(true)}
                placeholder="Ибрагим"
              />
              <label className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                name="email"
                label="E-mail"
                type="email"
                onFocus={() => setIsEditing(true)}
                placeholder="ibra@gmail.com"
              />
            </fieldset>
          </form>
          <div className="profile__buttons">
            {!isEditing ? (
              <>
                <button
                  className={`profile__button button-hover ${
                    isEditing ? "profile__button_disabled" : ""
                  }`}
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
                <Link
                  to="/"
                  className={`profile__button profile__button_red-text button-hover ${
                    isEditing ? "profile__button_disabled" : ""
                  }`}
                >
                  Выйти из аккаунта
                </Link>
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
