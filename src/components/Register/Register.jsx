import Form from "../Form/Form";
import useFormValidator from "../../hooks/useFormValidation";
import "./Register.css";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import logo from "../../images/logo.svg";

export default function Register({ onSubmit }) {
  const handleRegister = (values) => {
    onSubmit(values);
  };

  const { values, errors, handleChange, resetForm, isValid } =
    useFormValidator("form");

  return (
    <section className="register">
      <div className="regiter__container">
        <img className="register__logo" src={logo} alt="Логотип" />
        <Form
          title="Регистрация"
          submitBtnText="Зарегистрироваться"
          onSubmit={handleRegister}
        />
        <Input
          name="Имя"
          type="name"
          values={values}
          errors={errors}
          placeholder="Введите имя"
          className="form__input"
        />
        <p className="register__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
}
