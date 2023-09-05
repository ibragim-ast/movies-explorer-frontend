import { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";

const Profile = ({
  values,
  errors,
  handleChange,
  isValid,
  setValues,
  setIsValid,
  onLogout,
  isLoggedIn,
  onSubmit,
  requestStatus: { message, isSuccess },
  resetRequestMessage,
}) => {
  // Используем useContext для доступа к данным текущего пользователя
  const { name, email } = useContext(CurrentUserContext);

  // Состояние для режима редактирования
  const [isEditing, setIsEditing] = useState(false);

  // Обработчик отправки формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    setIsEditing(false);
  };

  // Обработчик нажатия на кнопку редактирования
  const handleEditClick = (evt) => {
    evt.preventDefault();
    setIsEditing(!isEditing);
  };

  // Эффект для установки начальных значений из контекста
  useEffect(() => {
    setValues({ name, email });
  }, [name, email, setValues]);

  // Эффект для проверки валидности формы
  useEffect(() => {
    if (values.name === name && values.email === email) {
      setIsValid(false);
    }
  }, [email, name, setIsValid, values]);

  // Эффект для сброса сообщения
  useEffect(() => {
    resetRequestMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">{`Привет, ${name}!`}</h1>
          <form
            className="profile__form"
            name="profile"
            onSubmit={handleSubmit}
          >
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
                pattern={NAME_REGEX}
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
                pattern={EMAIL_REGEX}
              />
              <span className="profile__error">{errors.email}</span>
            </label>
            <p
              className={`profile__request-message ${
                !isSuccess ? "profile__request-message_type_error" : ""
              }`}
            >
              {message}
            </p>
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
                  {isEditing ? "Сохранить" : "Редактировать"}
                </button>
                <button
                  className="profile__logout button-hover"
                  type="button"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
};

export default Profile;
