import { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = ({ values, errors, handleChange, isValid, setValues }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (evt) => {
    evt.preventDefault();
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    setValues({ name: "Ибрагим", email: "ibragim.ast@gmail.com" });
  }, [setValues]);

  return (
    <>
      <Header />
      <main className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {values.name}!</h1>
          <form className="profile__form" name="profile">
            <label className="profile__field">
              <span className="profile__label">Имя</span>
              <input
                className={`profile__input ${
                  isEditing ? "profile__input_active" : ""
                } ${errors.name ? "profile__input_active-error" : ""}`}
                type="text"
                placeholder="Имя"
                name="name"
                minLength="2"
                maxLength="30"
                required
                onChange={handleChange}
                value={values.name}
                autoComplete="off"
                disabled={!isEditing}
              />
              <span className="profile__error">{errors.name}</span>
            </label>
            <label className="profile__field">
              <span className="profile__label">E-mail</span>
              <input
                className={`profile__input ${
                  isEditing ? "profile__input_active" : ""
                } ${errors.email ? "profile__input_active-error" : ""}`}
                type="email"
                placeholder="E-mail"
                name="email"
                required
                onChange={handleChange}
                value={values.email}
                autoComplete="off"
                disabled={!isEditing}
              />
              <span className="profile__error">{errors.email}</span>
            </label>
            {isEditing && (
              <button
                className="profile__submit-btn button-hover"
                type="submit"
                disabled={!isValid}
              >
                {isEditing ? "Сохранить" : "Редактировать"}
              </button>
            )}
            {!isEditing && (
              <>
                <button
                  className="profile__edit-btn button-hover"
                  type="button"
                  onClick={handleEditClick}
                >
                  {isEditing ? "Сохранить" : "Редактировать"}{" "}
                </button>
                <Link className="profile__logout link-hover" to="/">
                  Выйти из аккаунта
                </Link>
              </>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Profile;
