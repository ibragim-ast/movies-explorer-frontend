import logo from "../../assets/images/logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import CTA from "../CTA/CTA";
import "./Register.css";

export default function Register() {
  return (
    <>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип" />
        <form className="register__form">
          <h1 className="register__title">Добро пожаловать!</h1>
          <div className="register__form-container">
            <Input label="Имя" type="name" name="name" />
            <Input label="E-mail" type="email" name="email" />
            <Input label="Пароль" type="password" name="password" />
          </div>
          <Button modifier="register" text="Зарегистрироваться" />
        </form>
      </section>
      <CTA text="Уже зарегистрированы?" linkText="Войти" to="/signin" />
    </>
  );
}
